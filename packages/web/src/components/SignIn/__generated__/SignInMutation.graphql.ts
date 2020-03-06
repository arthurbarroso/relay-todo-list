/* tslint:disable */
/* eslint-disable */
/* @relayHash 07580f9f7039825cba98f41360ecc8cc */

import { ConcreteRequest } from "relay-runtime";
export type SessionInput = {
    username?: string | null;
    password?: string | null;
};
export type SignInMutationVariables = {
    input: SessionInput;
};
export type SignInMutationResponse = {
    readonly login: {
        readonly token: string;
    } | null;
};
export type SignInMutation = {
    readonly response: SignInMutationResponse;
    readonly variables: SignInMutationVariables;
};



/*
mutation SignInMutation(
  $input: SessionInput!
) {
  login(input: $input) {
    token
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "SessionInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "login",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "SessionType",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "token",
                    "args": null,
                    "storageKey": null
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "SignInMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "SignInMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "SignInMutation",
            "id": null,
            "text": "mutation SignInMutation(\n  $input: SessionInput!\n) {\n  login(input: $input) {\n    token\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '0c51a06069c29526c99e77603f394f5f';
export default node;
