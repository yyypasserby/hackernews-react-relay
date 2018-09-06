/**
 * @flow
 * @relayHash e083839dcf14ef3acec6080adb1cc73d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type VoteFilter = {
  AND?: ?$ReadOnlyArray<VoteFilter>,
  OR?: ?$ReadOnlyArray<VoteFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  link?: ?LinkFilter,
  user?: ?UserFilter,
};
export type LinkFilter = {
  AND?: ?$ReadOnlyArray<LinkFilter>,
  OR?: ?$ReadOnlyArray<LinkFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  description?: ?string,
  description_not?: ?string,
  description_in?: ?$ReadOnlyArray<string>,
  description_not_in?: ?$ReadOnlyArray<string>,
  description_lt?: ?string,
  description_lte?: ?string,
  description_gt?: ?string,
  description_gte?: ?string,
  description_contains?: ?string,
  description_not_contains?: ?string,
  description_starts_with?: ?string,
  description_not_starts_with?: ?string,
  description_ends_with?: ?string,
  description_not_ends_with?: ?string,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  url?: ?string,
  url_not?: ?string,
  url_in?: ?$ReadOnlyArray<string>,
  url_not_in?: ?$ReadOnlyArray<string>,
  url_lt?: ?string,
  url_lte?: ?string,
  url_gt?: ?string,
  url_gte?: ?string,
  url_contains?: ?string,
  url_not_contains?: ?string,
  url_starts_with?: ?string,
  url_not_starts_with?: ?string,
  url_ends_with?: ?string,
  url_not_ends_with?: ?string,
  postedBy?: ?UserFilter,
  votes_every?: ?VoteFilter,
  votes_some?: ?VoteFilter,
  votes_none?: ?VoteFilter,
};
export type UserFilter = {
  AND?: ?$ReadOnlyArray<UserFilter>,
  OR?: ?$ReadOnlyArray<UserFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  email?: ?string,
  email_not?: ?string,
  email_in?: ?$ReadOnlyArray<string>,
  email_not_in?: ?$ReadOnlyArray<string>,
  email_lt?: ?string,
  email_lte?: ?string,
  email_gt?: ?string,
  email_gte?: ?string,
  email_contains?: ?string,
  email_not_contains?: ?string,
  email_starts_with?: ?string,
  email_not_starts_with?: ?string,
  email_ends_with?: ?string,
  email_not_ends_with?: ?string,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  password?: ?string,
  password_not?: ?string,
  password_in?: ?$ReadOnlyArray<string>,
  password_not_in?: ?$ReadOnlyArray<string>,
  password_lt?: ?string,
  password_lte?: ?string,
  password_gt?: ?string,
  password_gte?: ?string,
  password_contains?: ?string,
  password_not_contains?: ?string,
  password_starts_with?: ?string,
  password_not_starts_with?: ?string,
  password_ends_with?: ?string,
  password_not_ends_with?: ?string,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  links_every?: ?LinkFilter,
  links_some?: ?LinkFilter,
  links_none?: ?LinkFilter,
  votes_every?: ?VoteFilter,
  votes_some?: ?VoteFilter,
  votes_none?: ?VoteFilter,
};
export type LinkCheckVoteQueryVariables = {|
  voteFilter: VoteFilter
|};
export type LinkCheckVoteQueryResponse = {|
  +viewer: {|
    +allVotes: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string
        |}
      |}>
    |}
  |}
|};
export type LinkCheckVoteQuery = {|
  variables: LinkCheckVoteQueryVariables,
  response: LinkCheckVoteQueryResponse,
|};
*/


/*
query LinkCheckVoteQuery(
  $voteFilter: VoteFilter!
) {
  viewer {
    allVotes(filter: $voteFilter) {
      edges {
        node {
          id
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "voteFilter",
    "type": "VoteFilter!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allVotes",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "filter",
      "variableName": "voteFilter",
      "type": "VoteFilter"
    }
  ],
  "concreteType": "VoteConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "VoteEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Vote",
          "plural": false,
          "selections": [
            v1
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "LinkCheckVoteQuery",
  "id": null,
  "text": "query LinkCheckVoteQuery(\n  $voteFilter: VoteFilter!\n) {\n  viewer {\n    allVotes(filter: $voteFilter) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LinkCheckVoteQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LinkCheckVoteQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v2,
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '482083bad7114df7f888c57b332c28a3';
module.exports = node;
