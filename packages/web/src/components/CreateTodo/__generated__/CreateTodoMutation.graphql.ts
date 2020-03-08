/* tslint:disable */
/* eslint-disable */
/* @relayHash 52cbe23f93192df1dd2792544fb46fa6 */

import { ConcreteRequest } from "relay-runtime";
export type createTodoInput = {
    title: string;
    content: string;
    done: boolean;
    clientMutationId?: string | null;
};
export type CreateTodoMutationVariables = {
    input: createTodoInput;
};
export type CreateTodoMutationResponse = {
    readonly createTodo: {
        readonly todoEdge: {
            readonly node: {
                readonly id: string;
                readonly title: string | null;
                readonly author: {
                    readonly username: string | null;
                };
            } | null;
        } | null;
    } | null;
};
export type CreateTodoMutation = {
    readonly response: CreateTodoMutationResponse;
    readonly variables: CreateTodoMutationVariables;
};



/*
mutation CreateTodoMutation(
  $input: createTodoInput!
) {
  createTodo(input: $input) {
    todoEdge {
      node {
        id
        title
        author {
          username
          id
        }
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
            "type": "createTodoInput!",
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
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
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
            "name": "CreateTodoMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "createTodo",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "createTodoPayload",
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
                                        (v3 /*: any*/),
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "author",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "User",
                                            "plural": false,
                                            "selections": [
                                                (v4 /*: any*/)
                                            ]
                                        }
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
            "name": "CreateTodoMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "createTodo",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "createTodoPayload",
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
                                        (v3 /*: any*/),
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "author",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "User",
                                            "plural": false,
                                            "selections": [
                                                (v4 /*: any*/),
                                                (v2 /*: any*/)
                                            ]
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
            "name": "CreateTodoMutation",
            "id": null,
            "text": "mutation CreateTodoMutation(\n  $input: createTodoInput!\n) {\n  createTodo(input: $input) {\n    todoEdge {\n      node {\n        id\n        title\n        author {\n          username\n          id\n        }\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '55e3b495701552c7bdfa666b0f3402e5';
export default node;
