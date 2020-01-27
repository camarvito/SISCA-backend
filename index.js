// const express = require('express')
// const graphqlHTTP = require('express-graphql')

// const mongo = require('mongoose')
// const app = express()

// mongo.connect('mongodb://***yourusername***:***yourpassword***@ds053317.mlab.com:53317/gql-demo', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// mongo.connection.once('open', () => {
//     console.log('connected to database');
// })

// app.use('/graphql', graphqlHTTP({
//     graphiql: true
// }))

// app.listen(8080, () => {
//     console.log('Server running succefully...')
// })


const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})