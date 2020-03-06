import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
//@ts-ignore
import environment from '../../relay/environment';


const query = graphql`
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
`;
const TodoList = () => (
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
      const { todos } = props;


      return (
        <div>
          {
            //@ts-ignore
            todos.edges.map(node => (
              <h1 key={node.node.id}>{node.node.title}</h1>
            ))
          }
        </div>
      )
    }}
  />
);
export default TodoList;