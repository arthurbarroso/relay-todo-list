import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 8%;
  max-width: 315px;

  a {
    color: #759c11;
  }

  form {
    display: flex;
    flex-direction: column;

    img {
      max-width: 315px;
      margin-bottom: 10%;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      color: #333;
      margin-bottom: 3%;
      padding: 0 3%;
    }

    span {
      color: #333;
    }

    button {
      background: #1eb36b;
      border-radius: 4px;
      height: 32px;
      border: 0;
      margin-bottom: 3%;
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;

      &:hover {
        background: ${darken(0.03, "#1eb36b")};
      }
    }
  }
`;
