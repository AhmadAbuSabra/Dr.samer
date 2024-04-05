import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

import InnerPageHeader from '@/components/header/InnerPageHeader';
import Footer from '@/components/footer/Footer';
import PostsListWidget from '@/components/section/sidebar/PostsListWidget';
import PostsListExpanded from '@/components/section/sidebar/PostsListExpanded';
import Breadcrumb from '@/components/nav/Breadcrumb';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';
import CommentForm from '@/components/comment/form/CommentForm';
import { latestArticles, popularArticles } from '@/resources/demo-data';
import SocialWidget from '@/components/section/sidebar/SocialWidget';
import CommentsThread from '@/components/comment/thread/CommentsThread';

export default function Project() {
  return (
    <>
      <InnerPageHeader headline="Project">
        <Breadcrumb>
          <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
          <BreadcrumbItem href="/projects/some-slug">Project</BreadcrumbItem>
        </Breadcrumb>
      </InnerPageHeader>

      <section className="my-lg-5 py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="past-project-featured">
                <Image
                  width={1366}
                  height={768}
                  layout="responsive"
                  src="/images/project-buhalbu-unbranded.png"
                  objectFit="cover"
                  loading="lazy"
                  alt="Buhalbu.com"
                />
              </div>
              <div className="shadow-sm bg-white pt-2">
                <header className="px-3 my-2">
                  <h1 className="h2">BuhalBu.com</h1>
                  <span className="text-muted">
                    June 14, 2020 / by Sashe Vuchkov / 0 Comments
                  </span>
                  <hr />
                </header>
                <div className="px-3 py-2">
                  <p>
                    The core idea of BuhalBu.com is to promote all the cool
                    stuff you can do with JavaScript & React focusing on the
                    many topics you didn’t learn about from most of your books
                    and online courses.
                  </p>

                  <p>What do you get for free?</p>

                  <ul className="mb-3">
                    <li className="py-2">
                      <div className="d-flex align-items-start">
                        <div>
                          <div className="badge bg-primary rounded-pill me-2">
                            <span className="ti-check" />
                          </div>
                        </div>
                        <div>
                          <p className="mb-0">
                            Content on carefully researched topics that will
                            broaden your vision of what is possible with
                            JavaScript
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-start">
                        <div>
                          <div className="badge bg-primary rounded-pill me-2">
                            <span className="ti-check" />
                          </div>
                        </div>
                        <div>
                          <p className="mb-0">
                            Related tips, tricks and techniques so you can start
                            using the new stuff right away
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-start">
                        <div>
                          <div className="badge bg-primary rounded-pill me-2">
                            <span className="ti-check" />
                          </div>
                        </div>
                        <div>
                          <p className="mb-0">
                            Lots of examples that illustrates the usefulness of
                            the discussed topic
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-start">
                        <div>
                          <div className="badge bg-primary rounded-pill me-2">
                            <span className="ti-check" />
                          </div>
                        </div>
                        <div>
                          <p className="mb-0">
                            Lists of carefully curated resources that will help
                            you to explore more about it
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-start">
                        <div>
                          <div className="badge bg-primary rounded-pill me-2">
                            <span className="ti-check" />
                          </div>
                        </div>
                        <div>
                          <p className="mb-0">
                            And many other awesome things (some of them are
                            still “under construction”)
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <p>
                    To create this beautiful website I used cutting-edge
                    technologies like React, HTML & CSS3 for the front-end part
                    and for the backend I used Next.js with Headless WordPress.
                  </p>
                  <p>
                    It was my first project where I used Next.js and I was
                    amazed how easy it is to create complex websites with that
                    framework. It was a love at first sight.
                  </p>
                </div>
              </div>

              <hr className="my-5" />

              <CommentsThread
                comments={[
                  {
                    id: 1,
                    parent: 0,
                    content: "Hello, it's cool and cooler it gets",
                    author: 'Sonya',
                    date: 'May 21, 2021 04:01',
                    avatar: '/images/test-1.jpg',
                  },
                  {
                    id: 2,
                    parent: 0,
                    content:
                      "What a sad commentary on our nation's attention span",
                    author: 'Johny',
                    date: 'May 21, 2021 22:30',
                    avatar: '/images/test-2.jpg',
                  },
                ]}
                allow
              />
              <CommentForm />
            </Col>
            <Col lg={4} className="ps-lg-4 mt-5 mt-lg-0">
              <PostsListWidget title="Latest Articles" posts={latestArticles} />
              <SocialWidget className="my-5" />
              <PostsListExpanded
                title="Popular Today"
                posts={popularArticles}
                className="mt-3"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
