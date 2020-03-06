/* tslint:disable */
/* eslint-disable */
/* @relayHash 2de17646476b39a02038fe6e311f6ffa */

import { ConcreteRequest } from "relay-runtime";
export type createUserInput = {
    username: string;
    email: string;
    password: string;
    clientMutationId?: string | null;
};
export type SignUpMutationVariables = {
    input: createUserInput;
};
export type SignUpMutationResponse = {
    readonly createUser: {
        readonly userEdge: {
            readonly node: {
                readonly username: string | null;
            } | null;
        } | null;
    } | null;
};
export type SignUpMutation = {
    readonly response: SignUpMutationResponse;
    readonly variables: SignUpMutationVariables;
};



/*
mutation SignUpMutation(
  $input: createUserInput!
) {
  createUser(input: $input) {
    userEdge {
      node {
        username
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "createUserInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
        } as any)
    ], v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "username",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "SignUpMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "createUser",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "createUserPayload",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "userEdge",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "UserEdge",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "node",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "plural": false,
                                    "selections": [
                                        (v2 /*: any*/)
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "SignUpMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "createUser",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "createUserPayload",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "userEdge",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "UserEdge",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "node",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "plural": false,
                                    "selections": [
                                        (v2 /*: any*/),
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "id",
                                            "args": null,
                                            "storageKey": null
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "SignUpMutation",
            "id": null,
            "text": "mutation SignUpMutation(\n  $input: createUserInput!\n) {\n  createUser(input: $input) {\n    userEdge {\n      node {\n        username\n        id\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'dc0b40bb0d6465cde1c39f4da5b45c18';
export default node;
