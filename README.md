# Desafio Jubileu

## How init:

### Running Locally

Make sure you have [Node.js](https://nodejs.org/en/) and [Mongo](https://docs.mongodb.com/manual/administration/install-community/) installed.

```sh 
- Create /.env same /.env.example content 
- make sure DB_DATABASE is already configured as database on the Mongo
- yarn dev or npm run dev to start server in development environment
- yarn start or npm run start to gent ts files and run in production environment
```


### Running with docker

Make sure you have [Node.js](https://nodejs.org/en/), [Docker](https://docs.docker.com/desktop/) and [Docker Compose(>=1.27.4)](https://docs.docker.com/compose/install/) installed.
```sh
- Create /.env same /.env.example content
- run docker-compose up -d
```


### Request example
post to http://localhost:3000/plans
```json
{
    "origin": "011", 
    "destiny": "016", 
    "minutes": 92, 
    "planName": "FaleMais 90"
}
```

### Response example

```json
{
    "origin": "011",
    "destiny": "016",
    "planName": "FaleMais 90",
    "minutes": 92,
    "priceWithoutPlan": 174.8,
    "priceWithPlanDiscount": 4.18
}
```