import styled from 'styled-components';

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

  form {
    display: flex;
    flex-direction: column;

    img {
      max-width: 315px;
      margin-bottom: 10%
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
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 32px;
      border: 0;

      &:hover {
        background: #cfcdcd
      }
    }
  }
`;

