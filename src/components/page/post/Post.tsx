import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

import InnerPageHeader from '@/components/header/InnerPageHeader';
import Footer from '@/components/footer/Footer';
import PostsListWidget from '@/components/section/sidebar/PostsListWidget';
import PostsListExpanded from '@/components/section/sidebar/PostsListExpanded';
import Breadcrumb from '@/components/nav/Breadcrumb';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';
import SnippetCard from '@/components/section/snippets/SnippetCard';
import CommentForm from '@/components/comment/form/CommentForm';
import {
  latestArticles,
  featuredArticles,
  popularArticles,
  tags,
  comments,
} from '@/resources/demo-data';
import SocialWidget from '@/components/section/sidebar/SocialWidget';
import CommentsThread from '@/components/comment/thread/CommentsThread';
import SectionTitle from '@/components/section/SectionTitle';
import TagsWidget from '@/components/section/sidebar/TagsWidget';

export default function Post() {
  return (
    <>
      <InnerPageHeader headline="Blog Article">
        <Breadcrumb>
          <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
          <BreadcrumbItem href="/blog/some-slug">Article</BreadcrumbItem>
        </Breadcrumb>
      </InnerPageHeader>

      <section className="my-lg-5 py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="shadow-sm bg-white">
                <Image
                  width={1366}
                  height={768}
                  layout="responsive"
                  src="/images/yasin-yusuf-fMh-VTuMHQs-unsplash-norms-resized.jpg"
                  objectFit="cover"
                  loading="lazy"
                />
                <header className="px-3 my-2">
                  <h1 className="h2">A not so fair industry norm</h1>
                  <span className="text-muted">
                    June 14, 2020 / by Sashe Vuchkov / 0 Comments
                  </span>
                  <hr />
                </header>
                <div className="px-3 py-2">
                  <p>
                    Code. Blogs. Articles. eBooks. White Papers. Ads. Website
                    copy. Poetry. Jokes. Essays.
                  </p>

                  <p>
                    Maybe you don’t know yet, but I’m very passionate not only
                    about writing software.
                  </p>

                  <p>Actually, I’m into writing itself.</p>

                  <p>
                    It’s weird, you know, but if I were immortal, I would spend
                    most of the time writing and learning all possible genres,
                    formats, and types of writing.
                  </p>

                  <p>That’s how far my craziness goes…</p>

                  <p>
                    Suppose I’ve just written a best seller eBook and sell the
                    rights to a publisher. In that case, I will get a fat check
                    as an initial payment and a hefty royalty payment on every
                    sale so I will have some revenue from this intellectual
                    property year after year.
                  </p>

                  <p>
                    And what happens if I create or participate with original
                    code to create “best seller” software for a company?
                  </p>

                  <p>I get my wage at the end of the month.</p>

                  <p>And that’s it.</p>

                  <p>
                    One app or website can be a very profitable intellectual
                    property, but in case we don’t have any “options” in the
                    company, we, the authors of the code, take a tiny share of
                    the overall profits.
                  </p>

                  <p>And I consider that “a not so fair industry norm.”</p>
                </div>
              </div>

              <Row className="my-5">
                {featuredArticles.length > 0 && (
                  <>
                    <SectionTitle>Related Articles</SectionTitle>
                    {featuredArticles.map((snippet) => (
                      <Col key={snippet.path} md={6}>
                        <SnippetCard {...snippet} />
                      </Col>
                    ))}
                  </>
                )}
              </Row>

              <hr className="my-5" />

              <CommentsThread comments={comments} allow />
              <CommentForm />
            </Col>
            <Col lg={4} className="ps-lg-4 mt-5 mt-lg-0">
              <PostsListWidget title="Latest Articles" posts={latestArticles} />
              <SocialWidget className="my-5" />
              <PostsListExpanded
                title="Popular Today"
                posts={popularArticles}
                className="my-3"
              />
              <TagsWidget tags={tags} className="mt-4" />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
