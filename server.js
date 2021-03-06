import express from 'express';
import path from 'path'
import bodyParser from 'body-parser';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import models  from './models'
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})
const PORT = 8080;

const app = express();

const graphqlEndpoint = '/graphql'
// bodyParser is needed just for POST.
app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema,context:{models}}));
app.use('/graphiql', graphiqlExpress({endpointURL:graphqlEndpoint}))
models.sequelize.sync().then(()=>{
    app.listen(PORT);
})
