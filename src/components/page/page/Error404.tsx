import React from 'react';

import Breadcrumb from '@/components/nav/Breadcrumb';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';
import { Container } from 'react-bootstrap';
import SiteNav from '@/components/nav/SiteNav';

export default function Error404() {
  return (
    <>
      <header className="header inner-pages-header" style={{ height: '100vh' }}>
        <div className="d-flex flex-column">
          <SiteNav />
          <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-start">
            <Breadcrumb>
              <BreadcrumbItem href="#">Page Not Found</BreadcrumbItem>
            </Breadcrumb>
            <p className="text-white mt-3" style={{ fontSize: '1.2rem' }}>
              The page you&apos;re looking for doesn&apos;t exist or is moved
              somewhere else.
            </p>
          </Container>
        </div>
      </header>
    </>
  );
}
