import { GC_AUTH_TOKEN } from './constants';

import {Environment, Network, RecordSource, Store} from 'relay-runtime';

const store = new Store(new RecordSource());

const GRAPH_COOL_ENDPOINT = 'https://api.graph.cool/relay/v1/';
const RELAY_API_ENDPOINT = GRAPH_COOL_ENDPOINT + 'cjl49i77l2nkj0129xvzmfa76';

const network = Network.create((operation, variables) => {
  return fetch(RELAY_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(GC_AUTH_TOKEN)}`
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
