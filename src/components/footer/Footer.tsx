import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import React from 'react';
import { latestArticles } from '@/resources/demo-data';
import Link from 'next/link';
import { FaWhatsapp,FaYoutube  } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <Container className="py-5">
        <Row>
          <Col
            lg={3}
            className="d-flex align-items-center justify-content-center justify-content-lg-start"
          >
            <Navbar.Brand className="d-flex align-items-center">
              <img
                src="/images/logo2.png"
                alt="Dr.samer"
                style={{ width: '200px' }}
              />
              {/* <span>DevInception</span> */}
            </Navbar.Brand>
          </Col>
          {/* <Col
            lg={3}
            className="mt-5 mt-lg-0 text-center text-lg-start px-lg-0 px-4 pe-lg-3"
          >
            <h6 className="text-uppercase">Recent Articles</h6>
            {latestArticles.slice(0, 2).map((article) => (
              <div key={article.headline} className="mt-2">
                <Link href={article.path}>
                  <a href={article.path} className="d-block mb-1">
                    {article.headline}
                  </a>
                </Link>
                <span>
                  <small className="fst-italic">{article.date}</small>
                </span>
              </div>
            ))}
          </Col> */}
          <Col lg={6} className="text-center text-lg-start">

            <Nav className="d-flex flex-row justify-content-center flex-lg-row">
              <Nav.Item>
                <Nav.Link href="/" style={{ fontSize: '14px' }}>الرئيسية</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about" style={{ fontSize: '14px' }}>عن الدكتور</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/portfolio" style={{ fontSize: '14px' }}>الفيديوهات</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact" style={{ fontSize: '14px' }}>المقالات</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact" style={{ fontSize: '14px' }}>الحالات التي نعالجها</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact" style={{ fontSize: '14px' }}>تواصل معنا</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            lg={3}
            className="d-flex justify-content-lg-end justify-content-center align-items-center mt-5 mt-lg-0"
          >
            <Nav className="social-channels">
              <Nav.Item>
              <Link href="https://www.instagram.com/dr.samer_abdelaziz?igsh=eG9kZjBjYWN4NWZi&utm_source=qr">
      <a className="nav-link" target="_blank" rel="noopener noreferrer">
        <span className="ti-instagram" />
      </a>
    </Link>
              </Nav.Item>
              <Nav.Item>
              <Link href="https://wa.me/962790922204">
      <a className="nav-link" target="_blank" rel="noopener noreferrer">
        <div style={{ fontWeight: 'bold' }}>
          <FaWhatsapp />
        </div>
      </a>
    </Link>
              </Nav.Item>
              <Nav.Item>
              <Link href="https://www.facebook.com/profile.php?id=100094422744397&mibextid=kFxxJD" >
      <a className="nav-link" target="_blank">
        <span className="ti-facebook" />
      </a>
    </Link>
              </Nav.Item>
              <Nav.Item>
              <Link href="https://www.youtube.com/@DrSamerAbdelAziz">
      <a className="nav-link" target="_blank" rel="noopener noreferrer">
      <FaYoutube />
      </a>
    </Link>
    </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <hr className="my-5 bg-white" />
          </Col>
          <Col sm={6} className="text-lg-start text-center">
            © Copyright Message
          </Col>
          <Col sm={6} className="d-flex justify-content-center justify-lg-end">
            <Nav className="legal">
              <Nav.Item>
                <Nav.Link>Privacy Policy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Terms Of Service</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
