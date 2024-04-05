import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

import AsideTitle from '@/components/section/sidebar/AsideTitle';

export type Props = {
  className?: string;
};

export default function SearchWidget({ className }: Props) {
  return (
    <aside className={className}>
      <AsideTitle>Search</AsideTitle>
      <Form>
        <InputGroup>
          <Form.Control type="search" name="search" />
          <Button variant="secondary">
            <span className="ti-search" />
          </Button>
        </InputGroup>
      </Form>
    </aside>
  );
}
