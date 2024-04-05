import React, { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';

import SiteNav from '@/components/nav/SiteNav';

export default function InnerPageHeader({ children }: PropsWithChildren<any>) {
  return (
    <header className="header inner-pages-header">
      <div className="d-flex flex-column">
        <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          {children}
        </Container>
      </div>
    </header>
  );
}
