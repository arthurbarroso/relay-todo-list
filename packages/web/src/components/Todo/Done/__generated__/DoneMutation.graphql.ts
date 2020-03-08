/* tslint:disable */
/* eslint-disable */
/* @relayHash 9b27b5618500cb8485bcb14f7950616d */

import { ConcreteRequest } from "relay-runtime";
export type updateTodoInput = {
    title: string;
    content: string;
    done: boolean;
    _id: string;
    clientMutationId?: string | null;
};
export type DoneMutationVariables = {
    input: updateTodoInput;
};
export type DoneMutationResponse = {
    readonly updateTodo: {
        readonly todoEdge: {
            readonly node: {
                readonly done: boolean | null;
            } | null;
        } | null;
    } | null;
};
export type DoneMutation = {
    readonly response: DoneMutationResponse;
    readonly variables: DoneMutationVariables;
};



/*
mutation DoneMutation(
  $input: updateTodoInput!
) {
  updateTodo(input: $input) {
    todoEdge {
      node {
        done
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
            "type": "updateTodoInput!",
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
        "name": "done",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "DoneMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "updateTodo",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "updateTodoPayload",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "todoEdge",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TodoEdge",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "node",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Todo",
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
            "name": "DoneMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "updateTodo",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "updateTodoPayload",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "todoEdge",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TodoEdge",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "node",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Todo",
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
            "name": "DoneMutation",
            "id": null,
            "text": "mutation DoneMutation(\n  $input: updateTodoInput!\n) {\n  updateTodo(input: $input) {\n    todoEdge {\n      node {\n        done\n        id\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '73dea714094d18593618772571dd8cef';
export default node;
