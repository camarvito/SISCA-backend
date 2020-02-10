require('dotenv-safe/config');

const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const mongo = require('mongoose');

const resolvers = require('./resolvers');

const schemaPath = './schema/index.graphql';

mongo.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongo.connection.once('open', () => {
  console.log('Conectado ao banco de dados!');
});

const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
