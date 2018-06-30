import queries from "../queries";
import { makeGraphqlReq } from "src/utils/fetch-graphql";

const syncNotes = (dateKey, content) => {
  const variables = { input: { dateKey, content } };
  const operationName = 'syncNotes';
  makeGraphqlReq({ query: queries.syncNotes(), variables, operationName });
};

export default syncNotes;
