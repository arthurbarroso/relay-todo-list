import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
//@ts-ignore
import environment from '../../relay/environment';


import { Container, Content, Wrapper } from './styles';
import Todo from '../Todo';
import { Link } from 'react-router-dom';


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
    <Container>
      <Content>
        <QueryRenderer
          environment={environment}
          query={
            graphql`
          query TodoDetailQuery($id: ID!){
            todo(id: $id){
              id
              content
              title
              _id
              done
            }
          }
        `
          }
          variables={{ id }}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>
            }
            if (!props) {
              return <div>Loading...</div>
            }
            //@ts-ignore
            return <Todo detail={true} id={props.todo.id} content={props.todo.content} title={props.todo.title} done={props.todo.done} _id={props.todo._id} />
          }

          }
        />
      </Content>
      <Wrapper>
        <Link to="/todos">
          <button type="button">BACK TO TODO LIST</button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default TodoDetail