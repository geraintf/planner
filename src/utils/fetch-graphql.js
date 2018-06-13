require('isomorphic-fetch');

const opts = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
};

export const makeGraphqlReq = ({ query, operationName, variables }, path = '') => {
  return fetch(`${path}/graphql`, {
    ...opts,
    body: JSON.stringify({ query, operationName, variables })
  }).then(res => res.json());
};
