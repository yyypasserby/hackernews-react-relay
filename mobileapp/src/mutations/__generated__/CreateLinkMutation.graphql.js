/**
 * @flow
 * @relayHash 7770a607ceae6dc246a3848c563ddb4c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateLinkInput = {
  description: string,
  url: string,
  postedById?: ?string,
  postedBy?: ?LinkpostedByUser,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<LinkvotesVote>,
  clientMutationId: string,
};
export type LinkpostedByUser = {
  email: string,
  password: string,
  linksIds?: ?$ReadOnlyArray<string>,
  links?: ?$ReadOnlyArray<UserlinksLink>,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<UservotesVote>,
};
export type UserlinksLink = {
  description: string,
  url: string,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<LinkvotesVote>,
};
export type LinkvotesVote = {
  userId?: ?string,
  user?: ?VoteuserUser,
};
export type VoteuserUser = {
  email: string,
  password: string,
  linksIds?: ?$ReadOnlyArray<string>,
  links?: ?$ReadOnlyArray<UserlinksLink>,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<UservotesVote>,
};
export type UservotesVote = {
  linkId?: ?string,
  link?: ?VotelinkLink,
};
export type VotelinkLink = {
  description: string,
  url: string,
  postedById?: ?string,
  postedBy?: ?LinkpostedByUser,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<LinkvotesVote>,
};
export type CreateLinkMutationVariables = {|
  input: CreateLinkInput
|};
export type CreateLinkMutationResponse = {|
  +createLink: ?{|
    +link: ?{|
      +id: string,
      +description: string,
      +url: string,
    |}
  |}
|};
export type CreateLinkMutation = {|
  variables: CreateLinkMutationVariables,
  response: CreateLinkMutationResponse,
|};
*/


/*
mutation CreateLinkMutation(
  $input: CreateLinkInput!
) {
  createLink(input: $input) {
    link {
      id
      description
      url
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateLinkInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createLink",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateLinkInput!"
      }
    ],
    "concreteType": "CreateLinkPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "link",
        "storageKey": null,
        "args": null,
        "concreteType": "Link",
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
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "url",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateLinkMutation",
  "id": null,
  "text": "mutation CreateLinkMutation(\n  $input: CreateLinkInput!\n) {\n  createLink(input: $input) {\n    link {\n      id\n      description\n      url\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateLinkMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateLinkMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cad1944b4d0a7d7d6e1a306f2eb58865';
module.exports = node;
