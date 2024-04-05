import React, { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';

export default function Layout({ children }: PropsWithChildren<any>) {
  return <Container fluid>{children}</Container>;
}
