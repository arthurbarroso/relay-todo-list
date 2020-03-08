/* tslint:disable */
/* eslint-disable */
/* @relayHash f74a4837b6abd0428e532d8cb8afe713 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoRefetchQueryVariables = {
    first?: number | null;
    search?: string | null;
};
export type TodoRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TodoRefetch_query">;
};
export type TodoRefetchQuery = {
    readonly response: TodoRefetchQueryResponse;
    readonly variables: TodoRefetchQueryVariables;
};



/*
query TodoRefetchQuery(
  $first: Int
  $search: String
) {
  ...TodoRefetch_query
}

fragment TodoRefetch_query on Query {
  todos(first: $first, search: $search) {
    edges {
      node {
        id
        _id
        content
        title
        done
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "first",
            "type": "Int",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "search",
            "type": "String",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "first"
        } as any),
        ({
            "kind": "Variable",
            "name": "search",
            "variableName": "search"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "TodoRefetchQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "FragmentSpread",
                    "name": "TodoRefetch_query",
                    "args": null
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "TodoRefetchQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "todos",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
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
                                            "name": "_id",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "content",
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
                                            "name": "done",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "__typename",
                                            "args": null,
                                            "storageKey": null
                                        }
                                    ]
                                },
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "cursor",
                                    "args": null,
                                    "storageKey": null
                                }
                            ]
                        },
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "pageInfo",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "PageInfoExtended",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "hasNextPage",
                                    "args": null,
                                    "storageKey": null
                                },
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "endCursor",
                                    "args": null,
                                    "storageKey": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "todos",
                    "args": (v1 /*: any*/),
                    "handle": "connection",
                    "key": "Refetch_todos",
                    "filters": [
                        "search"
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "TodoRefetchQuery",
            "id": null,
            "text": "query TodoRefetchQuery(\n  $first: Int\n  $search: String\n) {\n  ...TodoRefetch_query\n}\n\nfragment TodoRefetch_query on Query {\n  todos(first: $first, search: $search) {\n    edges {\n      node {\n        id\n        _id\n        content\n        title\n        done\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'a51834673acfed680363304e7abe3709';
export default node;
