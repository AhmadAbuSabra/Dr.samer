import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const threshold = 150;
    let prevTop = 0;
    let prevHidden = false;
    let currentHidden = false;
    let prevScrolled = false;

    const listener = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      currentHidden = currentScrollTop > prevTop + threshold;
      if (currentHidden !== prevHidden) {
        setHidden(currentHidden);
        prevHidden = currentHidden;
      }

      prevScrolled = currentScrollTop > threshold;
      if (prevScrolled !== scrolled) {
        setScrolled(prevScrolled);
      }

      prevTop = currentScrollTop;
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [scrolled]);

  const linkStyle = {
    color: 'rgb(109, 110, 112)', // Set the text color
    backgroundColor: 'rgba(0, 0, 0, 0)' // Assuming you want to keep the background transparent
  };

  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      style={{ backgroundColor: 'transparent' }} // Set navbar background to white
      className={`site-navigation mb-5 pb-2 ${
        hidden ? 'site-navigation-hidden' : ''
      } ${scrolled || opened ? 'site-navigation-opened' : ''}`}
    >
    <Container fluid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
  <Navbar.Brand style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', flex: '1 1 auto' }}>
    {/* Apply white background to the logo as well */}
    {/* Insert your logo here */}
    <img
      src="/images/LOGO1.png" // Replace with the path to your logo
      alt="Logo"
      style={{ maxHeight: '80px', backgroundColor: 'white' }} // Adjust the maximum height of your logo as needed and apply a white background
    />
  </Navbar.Brand>
  <Navbar.Toggle
    aria-controls="site-nav"
    style={{ color: '#353929', flexShrink: 0 }}
    onClick={() => setOpened(!opened)}
  />
        <Navbar.Collapse id="site-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref>
              <Nav.Link style={linkStyle}>الرئيسية</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link style={linkStyle}>عن الدكتور</Nav.Link>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Link style={linkStyle}>الفيديوهات</Nav.Link>
            </Link>
            <Link href="/blog" passHref>
              <Nav.Link style={linkStyle}>المقالات</Nav.Link>
            </Link>
            <Link href="/CasesPage" passHref>
              <Nav.Link style={linkStyle}> الحالات التي نعالجها</Nav.Link>
            </Link>
            <Link href="/InterventionalProcedures" passHref>
              <Nav.Link style={linkStyle}>  الإجراءات التداخلية  </Nav.Link>
            </Link>
            <Link href="/contacts?showComponent=1" passHref>
              <Nav.Link style={linkStyle}>تواصل معنا</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
