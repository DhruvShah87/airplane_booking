const express = require('express')
//express makes building servers much easier and faster
//its like a toolbox that gives you ready-made functions for handling HTTP requests, defining routes, sending responses
const {PORT, Logger} = require('./config')
const apiRoutes = require('./routes')

const app = express();


app.use('/api', apiRoutes)
app.listen(PORT, () =>{
    // console.log(`Server is running on port ${PORT}`)
    Logger.info(`Server is running on port ${PORT}`)
})
//a callback to know that server has started