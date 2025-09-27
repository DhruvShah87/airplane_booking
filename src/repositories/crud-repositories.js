const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const{AppError} = require('../utils/errors')

class CrudRepository {
    constructor(model) {
        this.model = model
    }

    async create(data) {

            const response = await this.model.create(data);
            if(!response || response instanceof Error)
                throw new Error('Cannot create the object in the database')
            return response;
    }

    async destroy(data) {

            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            if(!response)
                throw new AppError('Not able to delete the resource', StatusCodes.NOT_FOUND)
            return response;
    }

    async get(data) {
            const response = await this.model.findByPk(data)
            if(!response){
                throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND)
            }
            return response;

    }

    async getAll() {
        try {
            const response = await this.model.findAll()
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository: Get All");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            })
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repository: Get All");
            throw error;
        }
    }
}

module.exports = CrudRepository;