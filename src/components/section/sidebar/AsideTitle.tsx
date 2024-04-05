import React, { PropsWithChildren } from 'react';

export type Props = {
  className?: string;
};

export default function AsideTitle({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <h3 className={`h6 text-uppercase mb-3 text-dark ${className}`}>
      <span
        className="me-2 ti-arrow-circle-right font-weight-bold text-danger"
        style={{ position: 'relative', top: '1px' }}
      />
      {children}
    </h3>
  );
}
