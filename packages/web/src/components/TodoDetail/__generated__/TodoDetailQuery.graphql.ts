/* tslint:disable */
/* eslint-disable */
/* @relayHash 2ca98a1bf8c3a50eeae5bdadcce817e9 */

import { ConcreteRequest } from "relay-runtime";
export type TodoDetailQueryVariables = {
    id: string;
};
export type TodoDetailQueryResponse = {
    readonly todo: {
        readonly id: string;
        readonly content: string | null;
        readonly title: string | null;
        readonly _id: string;
        readonly done: boolean | null;
    } | null;
};
export type TodoDetailQuery = {
    readonly response: TodoDetailQueryResponse;
    readonly variables: TodoDetailQueryVariables;
};



/*
query TodoDetailQuery(
  $id: ID!
) {
  todo(id: $id) {
    id
    content
    title
    _id
    done
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "id",
            "type": "ID!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "todo",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "id"
                }
            ],
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
                    "name": "_id",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "done",
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
            "name": "TodoDetailQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "TodoDetailQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "query",
            "name": "TodoDetailQuery",
            "id": null,
            "text": "query TodoDetailQuery(\n  $id: ID!\n) {\n  todo(id: $id) {\n    id\n    content\n    title\n    _id\n    done\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '9ace96b10a267606ccefe72d625f3c36';
export default node;
