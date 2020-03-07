import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Wrapper } from './styles';
import Done from './Done';

interface TodoInterface {
  title: String;
  content: String;
  done: Boolean;
  id: String;
}

const Todo: React.FC<TodoInterface> = ({ title, content, done, id }) => {
  const url = `/todos/${id}`;
  return (
    <Wrapper>
      <Link to={url} >
        <Container>
          <h1>{title}</h1>
          <p>{content}</p>
          <Done done={done} />
        </Container>
      </Link>
    </Wrapper>
  )
}

export default Todo;