import styled from "styled-components";

export const Container = styled.div`
  //@ts-ignore
  color: ${props => (props.done ? "#008000" : "#f40000")};
`;
