import React from 'react';
import { Wrapper, Content } from './styles';


//@ts-ignore
export default function DefaultLayout({ children }) {
  return (
    <>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}
