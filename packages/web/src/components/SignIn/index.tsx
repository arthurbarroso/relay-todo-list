import React, { useState, useEffect } from 'react';
import { commitMutation, graphql } from 'react-relay';
import { Link } from 'react-router-dom';
//@ts-ignore
import { Container, Content } from './styles';
import environment from '../../relay/environment';
import history from '../../routes/history';



const mutation = graphql`
  mutation SignInMutation($input: SessionInput!){
   login(input: $input){
      token
    }
  }
`;


//@ts-ignore
function commit(environment, username, password, setToken) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { username, password }
      },
      onCompleted: (response, errors) => {
        if (errors) {
          console.log(errors);
          return;
        }
        setToken(response)
      }
    }
  )
}



export default function SignIn() {
  const [token, setToken] = useState({
    login: null
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token !== null && token.login !== null) {
      //@ts-ignore
      const bearer = token.login.token;
      localStorage.setItem('token', bearer);
      history.push('/todos');
    }
  }, [
    token
  ])


  return (
    <>
      <Container>
        <Content>
          <form>
            <img src="https://i.imgur.com/OQMbe4j.png" alt="login" />
            <span>Username:</span>
            <input name="username" placeholder="cooluser" value={username}
              onChange={event => setUsername(event.target.value)} />
            <span>Password:</span>
            <input name="password" type="password" placeholder="********" value={password}
              onChange={event => setPassword(event.target.value)} />
            <button onClick={() => commit(environment, username, password, setToken)} type="button" >Login</button>
          </form>
          <p>Doesn't have an account? <Link to="/signup">Sign up</Link></p>
        </Content>
      </Container>
    </>
  );
}

