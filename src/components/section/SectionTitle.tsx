import React, { PropsWithChildren } from 'react';

export type Props = {
  className?: string;
};

export default function SectionTitle({ children }: PropsWithChildren<Props>) {
  return (
    <h2 className="h5 text-uppercase mb-4">
      <span className="me-2 ti-arrow-circle-right fw-bold text-danger" />
      {children}
    </h2>
  );
}
