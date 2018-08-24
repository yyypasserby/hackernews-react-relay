import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import {
  GC_AUTH_TOKEN,
  GRAPH_COOL_ENDPOINT,
  PROJECT_ID,
} from './constants';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch(GRAPH_COOL_ENDPOINT + PROJECT_ID, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
});

const environment = new Environment({
  network,
  store,
});

export default environment;
