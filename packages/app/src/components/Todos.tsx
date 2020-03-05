import React from 'react';
import { QueryRenderer } from 'react-relay';
//@ts-ignore
import graphql from 'babel-plugin-relay/macro';
import environment from '../relay/environment';
import { TodoItem } from './styles/Todo';

const query = graphql`
    query TodosQuery {
      todos {
        edges {
        node {
          id
          title
          content
          author {
            username
          }
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
        return <h1>loading...</h1>;
      }
      //@ts-ignore
      const { todos } = props;


      return (
        <div>
          {
            //@ts-ignore
            todos.edges.map(node => (
              <TodoItem key={node.node.id}><p>{node.node.title} by {node.node.author.username}</p></TodoItem>
            ))
          }
        </div>
      )
    }}
  />
);
export default Todos