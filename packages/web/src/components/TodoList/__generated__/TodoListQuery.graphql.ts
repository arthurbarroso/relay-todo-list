/* tslint:disable */
/* eslint-disable */
/* @relayHash fa96ff654e40c5020d725acce8e78149 */

import { ConcreteRequest } from "relay-runtime";
export type TodoListQueryVariables = {};
export type TodoListQueryResponse = {
    readonly todos: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly title: string | null;
                readonly content: string | null;
            } | null;
        } | null>;
    };
};
export type TodoListQuery = {
    readonly response: TodoListQueryResponse;
    readonly variables: TodoListQueryVariables;
};



/*
query TodoListQuery {
  todos {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "todos",
            "storageKey": null,
            "args": null,
            "concreteType": "TodoConnection",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TodoEdge",
                    "plural": true,
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
                                    "name": "title",
                                    "args": null,
                                    "storageKey": null
                                },
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "content",
                                    "args": null,
                                    "storageKey": null
                                }
                            ]
                        }
                    ]
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "TodoListQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": [],
            "selections": (v0 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "TodoListQuery",
            "argumentDefinitions": [],
            "selections": (v0 /*: any*/)
        },
        "params": {
            "operationKind": "query",
            "name": "TodoListQuery",
            "id": null,
            "text": "query TodoListQuery {\n  todos {\n    edges {\n      node {\n        id\n        title\n        content\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '85f1ab446d92d4ac887b810caf0ca2ba';
export default node;