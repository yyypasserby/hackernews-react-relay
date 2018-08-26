/**
 * @flow
 * @relayHash 7276992d566fb053ba1945bdf507d5e1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthenticateUserMutationVariables = {|
  email: string,
  password: string,
|};
export type AuthenticateUserMutationResponse = {|
  +authenticateUser: ?{|
    +id: string,
    +token: string,
  |}
|};
export type AuthenticateUserMutation = {|
  variables: AuthenticateUserMutationVariables,
  response: AuthenticateUserMutationResponse,
|};
*/


/*
mutation AuthenticateUserMutation(
  $email: String!
  $password: String!
) {
  authenticateUser(email: $email, password: $password) {
    id
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "authenticateUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password",
        "type": "String!"
      }
    ],
    "concreteType": "AuthenticateUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AuthenticateUserMutation",
  "id": null,
  "text": "mutation AuthenticateUserMutation(\n  $email: String!\n  $password: String!\n) {\n  authenticateUser(email: $email, password: $password) {\n    id\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AuthenticateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthenticateUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ed84b2d0611603bb09bbc310cc065908';
module.exports = node;
