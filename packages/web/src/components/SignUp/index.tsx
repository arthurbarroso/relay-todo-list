import React, { useState } from 'react';
import { commitMutation, graphql } from 'react-relay';
//@ts-ignore
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Content } from './styles';
import environment from '../../relay/environment';

const mutation = graphql`
  mutation SignUpMutation($input: createUserInput!){
   createUser(input: $input){
      userEdge{
        node{
          username
        }
      }
    }
  }
`;
//@ts-ignore
function commit(environment, username, email, password) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { username, email, password }
      },
      onCompleted: (_, errors) => {
        if (errors) {
          toast.error('😔 Something went wrong when signing up');
        }
        toast.success('🚀 Successfully signed up. Please sign in');
      }
    }
  )
}

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Container>
      <Content>
        <form>
          <img src="https://i.imgur.com/8BlGgfV.png" alt="signup" />
          <span>Username:</span>
          <input name="username" placeholder="cooluser" value={username} onChange={event => setUsername(event.target.value)} />
          <span>Email:</span>
          <input name="email" placeholder="email" value={email} onChange={event => setEmail(event.target.value)} />
          <span>Password:</span>
          <input name="password" type="password" placeholder="********" value={password} onChange={event => setPassword(event.target.value)} />
          <button type="button" onClick={() => commit(environment, username, email, password)}>Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
      </Content>
    </Container>
  )
}