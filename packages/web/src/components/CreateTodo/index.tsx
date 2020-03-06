import React, { useState } from 'react';
import { commitMutation, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

//@ts-ignore
import environment from '../../relay/environment';
import history from '../../routes/history';

import { Container, Content } from './styles';



const mutation = graphql`
  mutation CreateTodoMutation($input: createTodoInput!){
   createTodo(input: $input){
      todoEdge{
        node{
          id
          title
          author {
            username
          }
        }
      }
    }
  }
`;


//@ts-ignore
function commit(environment, title, content, done) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { title, content, done }
      },
      onCompleted: (_, errors) => {
        if (errors) {
          console.log(errors);
          return;
        }
        history.push('/todos');
      }
    }
  )
}



export default function CreateTodo() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const done = false;


  return (
    <>
      <Container>
        <Content>
          <form>
            <span>Todo title:</span>
            <input name="title" placeholder="cool title" value={title}
              onChange={event => setTitle(event.target.value)} />
            <span>Todo content:</span>
            <input name="content" placeholder="what u gotta do" value={content}
              onChange={event => setContent(event.target.value)} />
            <button type="button" onClick={() => commit(environment, title, content, done)}>Create</button>
          </form>
          <p>Dont want to create a new todo? <Link to="todos">Go back</Link></p>
        </Content>
      </Container>
    </>
  );
}

