const mongo = require('mongoose')

const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

const schemaPath = './schema/index.graphql'

mongo.connect('mongodb+srv://vito:526342@cluster0-mo32b.mongodb.net/sisca?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

mongo.connection.once('open', () => {
    console.log('Conectado ao banco de dados!');
})

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})