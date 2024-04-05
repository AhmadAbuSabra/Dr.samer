import InnerPageHeader from '@/components/header/InnerPageHeader';
import { Col, Container, Row } from 'react-bootstrap';
import ContactsForm from '@/components/form/ContactsForm';
import Support from '@/components/section/lists/Support';
import Footer from '@/components/footer/Footer';
import React from 'react';
import Breadcrumb from '@/components/nav/Breadcrumb';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';
import { latestArticlesContacts } from '@/resources/demo-data';
import SnippetCard from '@/components/section/snippets/SnippetCard';
import SectionTitle from '@/components/section/SectionTitle';
import LatestBlogPosts from '@/pages/LatestBlogPosts';
import { useRouter } from 'next/router';
import ContactData from '@/pages/ContactData';

export default function Contacts() {
  const router = useRouter();
  const showComponent = router.query.showComponent;
console.log(showComponent)

  return (
    <>
      {/* <InnerPageHeader headline="Contact Me">
     
      </InnerPageHeader> */}
      <main className="flex-grow-1 my-lg-5 py-lg-5">
        <Container>
          <Row>
            <Col lg={6} className="order-1 order-lg-0 mt-5 mt-lg-0">
              <ContactsForm />
            </Col>
            {showComponent === '1' && (
              <Col lg={6} className="order-0 order-lg-1 mb-5 mb-md-0 mt-5 mt-lg-0">
                <Support />
              </Col>
            )}
             {showComponent === '2' &&(
              <Col lg={6} className="order-0 order-lg-1 mb-5 mb-md-0 mt-5 mt-lg-0">
                <ContactData />
              </Col>
            )}
          </Row>
          {/* <Row className="mt-5">
            <Col sm={12}>
              <SectionTitle>المقالات المضافة اخيرا</SectionTitle>
            </Col>
            <Col sm={12} className="d-flex flex-wrap">
        
              <LatestBlogPosts />
            
            </Col>
          </Row> */}
        </Container>
      </main>
      <Footer />
    </>
  );
}
