import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from "../resolvers";
import typeDefs from "../schema";

const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

const graphqlRouter = express();

const DEV = process.env.NODE_ENV === 'development';

if (DEV) {
  graphqlRouter.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}

graphqlRouter.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => ({ schema: executableSchema, context: { user: req.props.user } }))
);

export default graphqlRouter;
