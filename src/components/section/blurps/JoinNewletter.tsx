import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import React from 'react';

export type Props = {
  className?: string;
};

export default function JoinNewsletter(props: Props) {
  const { className } = props;
  return (
    <section className={`join-newsletter ${className}`}>
      <Container className="d-flex justify-content-center align-items-start">
        <div className="bg-secondary w-75 py-2 px-3 d-flex justify-content-between align-items-center">
          <div>
            <h2 className="h3 text-danger">
              Don&apos;t miss one single podcast
            </h2>
            <p>Join our email list to receive new podcast in your inbox</p>
          </div>
          <Form>
            <InputGroup>
              <Form.Control size="lg" name="email" type="text" />
              <Button color="primary" className="px-4">
                Join
              </Button>
            </InputGroup>
          </Form>
        </div>
      </Container>
    </section>
  );
}
