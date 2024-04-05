import React from 'react';
import { Button } from 'react-bootstrap';

import AsideTitle from '@/components/section/sidebar/AsideTitle';

export type Props = {
  className?: string;
  tags: any;
};

export default function TagsWidget({ className, tags }: Props) {
  return (
    <aside className={className}>
      <AsideTitle>Tags</AsideTitle>
      <div className="pe-3">
        {tags.map((tag: any) => (
          <Button
            key={tag.name}
            href={tag.href}
            variant="outline-dark"
            size="sm"
            className="me-2 mb-2"
          >
            {tag.name}
          </Button>
        ))}
      </div>
    </aside>
  );
}
