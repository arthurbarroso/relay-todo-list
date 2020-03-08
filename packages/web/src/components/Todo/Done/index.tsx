import React, { useState, useEffect } from 'react';
import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

import { Container } from './styles';

interface DoneInterface {
  _done: Boolean;
  _id: String;
  id: String;
  title: String;
  content?: String;
}

const mutation = graphql`
  mutation DoneMutation($input: updateTodoInput!){
    updateTodo(input: $input){
      todoEdge {
        node {
          done
        }
      }
    }
  }
`;


//@ts-ignore
function commit(environment, _id, done, title, content) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { _id, done, title, content }
      },
      onCompleted: (_, errors) => {
        if (errors) {
          return;
        }
      }
    }
  )
}


const Done: React.FC<DoneInterface> = ({ _done, _id, id, title, content }) => {
  const [done, setDone] = useState();

  const handleDone = () => {
    setDone(!done);
    commit(environment, _id, !done, title, content);
  }

  useEffect(() => {
    setDone(_done);
  }, [])
  return (
    //@ts-ignore
    <Container done={done}>
      <button type="button" onClick={() => handleDone()}>
        {done ? 'already done' : 'not done yet'}
      </button>
    </Container >
  );
}

export default Done;