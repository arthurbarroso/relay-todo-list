import styled from "styled-components";

export const Container = styled.div`
  button {
    //@ts-ignore
    color: ${props => (props.done ? "#008000" : "#f40000")};
    border: 0;
    background: none;
    padding: 0;
  }
`;
