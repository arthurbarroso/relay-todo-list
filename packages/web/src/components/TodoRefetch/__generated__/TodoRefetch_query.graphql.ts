/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoRefetch_query = {
    readonly todos: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly _id: string;
                readonly content: string | null;
                readonly title: string | null;
                readonly done: boolean | null;
            } | null;
        } | null>;
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
    };
    readonly " $refType": "TodoRefetch_query";
};
export type TodoRefetch_query$data = TodoRefetch_query;
export type TodoRefetch_query$key = {
    readonly " $data"?: TodoRefetch_query$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoRefetch_query">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TodoRefetch_query",
    "type": "Query",
    "metadata": {
        "connection": [
            {
                "count": "first",
                "cursor": null,
                "direction": "forward",
                "path": [
                    "todos"
                ]
            }
        ]
    },
    "argumentDefinitions": [
        {
            "kind": "RootArgument",
            "name": "first",
            "type": "Int"
        },
        {
            "kind": "RootArgument",
            "name": "search",
            "type": "String"
        }
    ],
    "selections": [
        {
            "kind": "LinkedField",
            "alias": "todos",
            "name": "__Refetch_todos_connection",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "search",
                    "variableName": "search"
                }
            ],
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
        }
    ]
} as any);
(node as any).hash = '84ebe7d8e4903952799ca120e551c649';
export default node;
