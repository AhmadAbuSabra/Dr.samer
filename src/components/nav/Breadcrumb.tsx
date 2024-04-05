import { Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap';
import React, { PropsWithChildren } from 'react';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';

export default function Breadcrumb({ children }: PropsWithChildren<any>) {
  return (
    <BootstrapBreadcrumb className="m-0 p-0">
      <BreadcrumbItem href="/">
        <span className="mr-2 ti-arrow-circle-right font-weight-bold text-danger" />{' '}
        
      </BreadcrumbItem>
      {children}
    </BootstrapBreadcrumb>
  );
}
