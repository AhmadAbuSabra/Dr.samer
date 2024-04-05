import { Card } from 'react-bootstrap';
import React from 'react';
import AsideTitle from '@/components/section/sidebar/AsideTitle';

export type Props = {
  className?: string;
};

export default function BenefitsWidget(props: Props) {
  const { className } = props;
  return (
    <aside className={`text-white sidebar-benefits ${className}`}>
      <AsideTitle>What I stand for</AsideTitle>

      <Card bg="secondary" className="d-flex flex-row align-items-center w-100">
        <Card.Body>
          <Card.Title>Modern Technologies</Card.Title>
          <Card.Text className="pe-lg-5">
            I use React and NextJs to create amazing apps
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <span className="ti-settings display-5 float-end" />
        </Card.Body>
      </Card>
      <Card bg="dark" className="d-flex flex-row align-items-center">
        <Card.Body>
          <Card.Title>Clean Code</Card.Title>
          <Card.Text className="pe-lg-5">
            My goal is the code I write to be clean and efficient
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <span className="ti-star display-5 float-end" />
        </Card.Body>
      </Card>
      <Card bg="primary" className="d-flex flex-row align-items-center">
        <Card.Body>
          <Card.Title>User Experience</Card.Title>
          <Card.Text className="pe-lg-5">
            Everything I do needs to brings joy to your customers
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <span className="ti-user display-5 float-end" />
        </Card.Body>
      </Card>
    </aside>
  );
}
