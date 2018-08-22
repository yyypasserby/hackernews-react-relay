/**
 * @flow
 * @relayHash 137974a80a473721057cb34a5859d83e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignupUserMutationVariables = {|
  email: string,
  password: string,
|};
export type SignupUserMutationResponse = {|
  +signupUser: ?{|
    +id: string,
    +token: string,
  |}
|};
export type SignupUserMutation = {|
  variables: SignupUserMutationVariables,
  response: SignupUserMutationResponse,
|};
*/


/*
mutation SignupUserMutation(
  $email: String!
  $password: String!
) {
  signupUser(email: $email, password: $password) {
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
    "name": "signupUser",
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
    "concreteType": "SignupUserPayload",
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
  "name": "SignupUserMutation",
  "id": null,
  "text": "mutation SignupUserMutation(\n  $email: String!\n  $password: String!\n) {\n  signupUser(email: $email, password: $password) {\n    id\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SignupUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SignupUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0788272e6ef1df8aa44a6f72553ac3ab';
module.exports = node;
