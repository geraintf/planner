import queries from "../queries";
import { makeGraphqlReq } from "../../utils/fetch-graphql";

const syncDayTodos = (dateKey, payload) => {
  const variables = { input: { dateKey, payload } };
  const operationName = 'syncTodos';
  makeGraphqlReq({ query: queries.syncTodos(), variables, operationName });
};

export default syncDayTodos;
