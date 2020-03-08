import React, { useState, useEffect } from 'react';

import { createRefetchContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


import createQueryRenderer from '../../golden_stack/createQueryRenderer';
import Todo from '../Todo';
import { Container, Content, Wrapper } from './styles';


let qTerms = '';
function TodoRefetch(props) {

  const [terms, setTerms] = useState('');
  const [count, setCount] = useState(12);
  //console.log(props)

  useEffect(() => {
    qTerms = terms;
  }, [terms]);

  useEffect(() => {
    toast.info("Whenever you get to the list's bottom you can scroll up to load more todos")
  }, [])


  console.log(props)

  function loadMore() {
    if (!props.history.isLoading) {
      props.relay.refetch(
        { search: qTerms, first: count },
        null,
        () => { setCount(count + 3); },
        { force: true }
      )
    } else {
      return;
    }
  }

  window.onscroll = () => {
    if (window.scrollY <= 40) {
      loadMore();
    } else {
      return;
    }
  }

  return (
    <Container>
      <Content>
        <input type="text" value={terms} onChange={e => setTerms(e.target.value)} placeholder="query terms" />
        {
          //@ts-ignore
          props.query.todos.edges.map(item => (
            <div key={item.node.id}>

              <Todo detail={false} title={item.node.title} done={item.node.done} id={item.node.id} _id={item.node._id} content={item.node.content} />

            </div>
          ))
        }
      </Content>
      <Wrapper>
        <Link to="/create">
          <button type="button">NEW TODO
        </button>
        </Link>
        <button onClick={() => loadMore()} type="button">load more</button>
        <button type="button">
          LOGOUT
      </button>
      </Wrapper>
    </Container>
  )
}

const TodoRefetchContainer = createRefetchContainer(
  TodoRefetch,
  {
    query: graphql`
      fragment TodoRefetch_query on Query {
        todos(first: $first, search: $search) @connection(key: "Refetch_todos") {
          edges {
            node {
              id
              _id
              content
              title
              done
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `
  },
  graphql`
      query TodoRefetchPaginationQuery($first: Int, $search: String){
        ...TodoRefetch_query
      }
    ` ,
);


export default createQueryRenderer(TodoRefetchContainer, TodoRefetch, {
  query: graphql`
    query TodoRefetchQuery($first: Int, $search: String){
      ...TodoRefetch_query
    }
  `,
  variables: { first: 9, search: qTerms }
})