import React from 'react';
import { Button } from 'react-bootstrap';

import AsideTitle from '@/components/section/sidebar/AsideTitle';

export type Props = {
  className?: string;
};

export default function SocialWidget({ className }: Props) {
  return (
    <aside className={className}>
      <AsideTitle>Social</AsideTitle>
      <div className="d-flex justify-content-between">
        <Button variant="secondary" className="flex-grow-1 me-1">
          <span className="ti-github" />
        </Button>
        <Button variant="secondary" className="flex-grow-1 me-1">
          <span className="ti-linkedin" />
        </Button>
        <Button variant="secondary" className="flex-grow-1 me-1">
          <span className="ti-twitter" />
        </Button>
        <Button variant="secondary" className="flex-grow-1">
          <span className="ti-facebook" />
        </Button>
      </div>
    </aside>
  );
}
