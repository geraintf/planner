import queries from "../queries";
import { makeGraphqlReq } from "src/utils/fetch-graphql";

const fetchDayTodos = path => makeGraphqlReq({ query: queries.getDayEntry() }, path);

export default fetchDayTodos;
