/**
 * @flow
 * @relayHash 0b9318a1ae38d331ef2c7063e8c2a837
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type todosQueryVariables = {||};
export type todosQueryResponse = {|
  +todosQuery: {|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +title: ?string,
        +content: ?string,
      |}
    |}>
  |}
|};
export type todosQuery = {|
  variables: todosQueryVariables,
  response: todosQueryResponse,
|};
*/


/*
query todosQuery {
  todosQuery {
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "todosQuery",
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
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "todosQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "todosQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "todosQuery",
    "id": null,
    "text": "query todosQuery {\n  todosQuery {\n    edges {\n      node {\n        id\n        title\n        content\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7491e3a253f7f219c2fe40a26acd4c6d';

module.exports = node;
