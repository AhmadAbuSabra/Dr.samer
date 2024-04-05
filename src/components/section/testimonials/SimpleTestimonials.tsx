import { Col, Container, Row } from 'react-bootstrap';
import React, { PropsWithChildren } from 'react';

export type Props = {
  title?: string;
  className?: string;
};

export default function SimpleTestimonials(props: PropsWithChildren<any>) {
  const { title, className, children } = props;

  return (
    <div className={className}>
      <Container>
        {title && (
          <Row>
            <Col>
              <h2 className="h4 text-uppercase d-flex flex-column align-items-center mb-5">
                <span className="me-2 ti-quote-right fw-bold text-primary" />
                {title}
              </h2>
            </Col>
          </Row>
        )}
        <Row>
          {React.Children.map(children, (child) => (
            <Col
              key={`key-${Math.floor(Math.random() * 100000)}`}
              md={6}
              className="mb-5"
            >
              {child}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
