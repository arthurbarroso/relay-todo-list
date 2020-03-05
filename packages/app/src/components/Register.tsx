import { commitMutation } from 'react-relay';
//@ts-ignore
import graphql from 'babel-plugin-relay/macro';


const mutation = graphql`
  mutation RegisterMutation($input: createUserInput!){
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
export default function commit(environment, username, email, password) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { username, email, password }
      }
    }
  )
}
