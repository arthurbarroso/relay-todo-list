import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QueryRenderer, graphql } from 'react-relay';
import { toast } from 'react-toastify';
//@ts-ignore
import environment from '../../relay/environment';

import { Container, Content, Wrapper } from './styles';
import Todo from '../Todo';


const query = graphql`
    query TodoListQuery($search: String) {
      todos(search: $search) {
        edges {
        node {
          id
          title
          done
          _id
          content
        }
      }
      }
    }
`;


function newList() {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <Content>
        <input type="text" placeholder="query todos by their title" value={search} onChange={e => setSearch(e.target.value)} />
        <QueryRenderer
          environment={environment}
          query={query}
          variables={{ search }}
          render={({ error, props }) => {
            if (error) {
              toast.error('😔 Something went wrong when fetching your todos');
              return <div>Error!</div>;
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
                    <div key={node.node.id}>
                      <Todo detail={false} title={node.node.title} done={node.node.done} id={node.node.id} _id={node.node._id} content={node.node.content} />
                    </div>
                  ))
                }
              </div>
            )
          }}
        />
      </Content>
      <Wrapper>
        <Link to="/create">
          <button type="button">NEW TODO
        </button>
        </Link>
        <button type="button">
          LOGOUT
      </button>
      </Wrapper>
    </Container>
  )
}

export default newList;