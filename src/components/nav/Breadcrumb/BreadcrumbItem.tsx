import React, { PropsWithChildren } from 'react';
import {
  BreadcrumbItem as BootstrapBreadcrumbItem,
  BreadcrumbItemProps,
} from 'react-bootstrap';
import Link from 'next/link';

export type Props = BreadcrumbItemProps;

export default function BreadcrumbItem(props: PropsWithChildren<Props>) {
  const { children, href } = props;

  return (
    <Link href={href || '#'}>
      <BootstrapBreadcrumbItem {...props}>{children}</BootstrapBreadcrumbItem>
    </Link>
  );
}
