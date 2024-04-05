import React from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';
import Link from 'next/link';

import InnerPageHeader from '@/components/header/InnerPageHeader';
import Footer from '@/components/footer/Footer';
import Breadcrumb from '@/components/nav/Breadcrumb';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';
import { projects } from '@/resources/demo-data';

export default function Projects() {
  return (
    <>
      <InnerPageHeader headline="Past Projects">
        <Breadcrumb>
          <BreadcrumbItem href="/projects">Past Projects</BreadcrumbItem>
        </Breadcrumb>
      </InnerPageHeader>

      <section className="past-projects past-projects-page py-4">
        <div className="container my-lg-5">
          <Row>
            {projects.concat(projects.slice(0, 2).reverse()).map((project) => (
              <Col key={project.id} md={6} lg={4} className="mb-5">
                <Link href={project.slug}>
                  <a className="image" href={project.slug}>
                    <img
                      width="300"
                      height="169"
                      src={project.image}
                      className="attachment-medium size-medium wp-post-image"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </Link>
                <Link href={project.slug}>
                  <a className="title" href={project.slug}>
                    {project.name}
                  </a>
                </Link>
              </Col>
            ))}
          </Row>
          <Row className="mt-3">
            <Col className="d-flex justify-content-center">
              <Pagination className="ml-auto mr-auto">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
          </Row>
        </div>
      </section>

      <Footer />
    </>
  );
}
