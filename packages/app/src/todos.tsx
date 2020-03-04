import React from 'react';
import { QueryRenderer, createRefetchContainer } from 'react-relay';
//@ts-ignore
import graphql from 'babel-plugin-relay/macro';
import environment from './relay/environment';


const query = graphql`
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
`;
const Todos = () => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{}}
    render={({ error, props }) => {
      if (error) {
        return <div>Error! {JSON.stringify(error)}</div>;
      }
      if (!props) {
        return <div>Loading...</div>;
      }
      //@ts-ignore
      const { todosQuery } = props;

      return (
        <div>
          {
            //@ts-ignore
            todosQuery.edges.map(node => (
              <h1 key={node.node.id}>{node.node.title}</h1>
            ))
          }
        </div>
      )
    }}
  />
);
export default Todos