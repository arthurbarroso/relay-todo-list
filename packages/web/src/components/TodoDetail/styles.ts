import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 8%;
  max-width: 315px;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 8%;
  max-width: 315px;

  button {
    width: 100%;
    background: #f57e42;
    border-radius: 4px;
    height: 32px;
    border: 0;
    margin-bottom: 3%;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;

    &:hover {
      background: ${darken(0.03, "#f57e42")};
    }
  }
`;
