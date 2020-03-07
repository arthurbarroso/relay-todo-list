import React from 'react';

interface Detail {
  match: {
    params: {
      id: String;
    }
  }
}

const TodoDetail: React.FC<Detail> = ({ match }) => {
  const { id } = match.params;
  return (
    <h1>{id}</h1>
  );
}

export default TodoDetail