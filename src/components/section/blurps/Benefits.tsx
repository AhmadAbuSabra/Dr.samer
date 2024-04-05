import { Card, Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export type Props = {
  className?: string;
};

export default function Benefits(props: Props) {
  const { className } = props;
  return (
    <div className={`blurp-benefits ${className}`}>
      <Container className="d-flex justify-content-center align-items-start">
        <Row className="wrapper-col shadow-sm bg-white gx-0">
          <Col lg={4} className="d-flex border-0">
            <Card
                style={{ backgroundColor: "#5e7140" }}
            
              className="d-flex flex-row align-items-center w-100"
            >
              <Card.Body>
                <Card.Title>   هل تعيش بعيداً عن موقع العيادة ؟ </Card.Title>
                <Card.Text className="pe-3">
                 يمكنك استشارة الدكتور سامر اون لاين من بيتك  
                 <br/>
                 <Link href="/contacts?showComponent=2">
          <a style={{ textDecoration: 'underline' }}>     اضغط هنا</a>
                </Link> 
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <span className="ti-clipboard display-4" />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="d-flex">
            <Card
              style={{ backgroundColor: "#747576" }}
              className="d-flex flex-row align-items-center w-100"
            >
              <Card.Body>
                <Card.Title>موقع العيادة</Card.Title>
                <Card.Text className="pe-3">
               عمان - الشميساني - مقابل المستشفى التخصصي - مجمع الحسيني 1 - الطابق السادس -للاتصال  790922204 00962
               <a target="_blank" href="https://wa.me/962790922204" className="btn btn-success" style={{ backgroundColor: '#5e7140' }}>
               <FaWhatsapp /> WhatsApp 
</a>

                </Card.Text>
              </Card.Body>
              <Card.Body>
                <a target="_blank" href="https://maps.app.goo.gl/8pwrS5yJkoHGTezU7?g_st=iw">
                <span className="ti-location-pin display-4" />
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="d-flex">
            <Card
           style={{ backgroundColor: "#353929" }}
              className="d-flex flex-row align-items-center w-100"
            >
              <Card.Body>
                <Card.Title> نقدم استشارة مجانية لسكان غزة و الضفة  </Card.Title>
                <Card.Text className="pe-3">
              لحجز استشارتك اون لاين من بيتك
                  <br/>
                 <Link href="/contacts?showComponent=2">
          <a style={{ textDecoration: 'underline' }}>     اضغط هنا</a>
                </Link> 
                </Card.Text>
              </Card.Body>
              <Card.Body>
                {/* <span className="ti-crown display-4" /> */}
               <span className="display-4"> <img src="/images/Palestine.png" alt="Description"/></span>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
