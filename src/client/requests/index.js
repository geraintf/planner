import queries from "../queries";
import { makeGraphqlReq } from "../../utils/fetch-graphql";

//TODO tidy and split out

export const addTodoReq = (dateKey, newTodo) => {
  const variables = { input: { dateKey, newTodo } };
  const operationName = 'addTodo';
  makeGraphqlReq({ query: queries.addTodo(), variables, operationName });
};

export const editTodoReq = (dateKey, todoId, todoValue) => {
  const variables = { input: { dateKey, todoId, todoValue } };
  const operationName = 'editTodo';
  makeGraphqlReq({ query: queries.editTodo(), variables, operationName });
};

export const deleteTodoReq = (dateKey, todoId) => {
  const variables = { input: { dateKey, todoId } };
  const operationName = 'deleteTodo';
  makeGraphqlReq({ query: queries.deleteTodo(), variables, operationName });
};

export const moveTodoReq = (dateKey, oldIndex, newIndex) => {
  const variables = { input: { dateKey, oldIndex, newIndex } };
  const operationName = 'moveTodo';
  makeGraphqlReq({ query: queries.moveTodo(), variables, operationName });
};

export const toggleTodoReq = (dateKey, todoId) => {
  const variables = { input: { dateKey, todoId } };
  const operationName = 'toggleTodo';
  makeGraphqlReq({ query: queries.toggleTodo(), variables, operationName });
};