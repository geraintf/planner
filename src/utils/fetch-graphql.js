require('isomorphic-fetch');

const opts = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'same-origin'
};

export const makeGraphqlReq = ({ query, operationName, variables }, path = '') => {

  if(!query) {
    throw new Error('An invalid query was passed into makeGraphqlReq: ' + query);
  }

  return fetch(`${path}/graphql`, {
    ...opts,
    body: JSON.stringify({ query, operationName, variables })
  }).then(res => res.json());
};
