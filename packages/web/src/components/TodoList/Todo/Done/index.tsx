import React from 'react';

import { Container } from './styles';

interface DoneInterface {
  done: Boolean;
}
const Done: React.FC<DoneInterface> = ({ done }) => {
  return (
    //@ts-ignore
    <Container done={done}>
      {done ? 'already done' : 'not done yet'}
    </Container>
  );
}

export default Done;