`src` -> 

- `config` -> this folder contains code related to configurations and setup. for eg setting up dotenv for using env variables

- `routes` -> in the routes folder, we register a route and the corresponding middleware and controller to it

- `middlwares` -> they are going to intercept the incoming requests where we can write our validators authenticators etc.

- `controllers` -> last middleware before passing request to business layer

- `repositories` -> this folder contains all the logic using which we interact the DB by writing queries. All the raw queries or ORM queries will go here

- `services` -> contains the business logic and interacts with repositories for data from database

- `utils` -> helper functions