import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Wrapper } from './styles';
import Done from './Done';

interface TodoInterface {
  title: String;
  content?: String;
  done: Boolean;
  id: String;
  _id: String;
  detail: Boolean;
}



const Todo: React.FC<TodoInterface> = ({ title, content, done, id, _id, detail }) => {
  const url = `/todos/${id}`;
  return (
    <Wrapper>
      <Container>
        <Link to={url}>
          <h1>{title}</h1>
          {detail ? <p>{content}</p> : null}
        </Link>
        <div>
          <Done _done={done} id={id} title={title} content={content} _id={_id} />
        </div>
      </Container>
    </Wrapper>
  )
}

export default Todo;