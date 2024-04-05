import React from 'react';
import Link from 'next/link';

import { Button, Col, Container, Pagination, Row } from 'react-bootstrap';
import Image from 'next/image';

import InnerPageHeader from '@/components/header/InnerPageHeader';
import Breadcrumb from '@/components/nav/Breadcrumb';
import Footer from '@/components/footer/Footer';
import BreadcrumbItem from '@/components/nav/Breadcrumb/BreadcrumbItem';
import BenefitsWidget from '@/components/section/sidebar/BenefitsWidget';
import PostsListWidget from '@/components/section/sidebar/PostsListWidget';
import SearchWidget from '@/components/section/sidebar/SearchWidget';
import SocialWidget from '@/components/section/sidebar/SocialWidget';

import { latestArticles, tags } from '@/resources/demo-data';
import TagsWidget from '@/components/section/sidebar/TagsWidget';
import AllBlogsPosts from '@/pages/AllBlogsPosts';

export default function Archive() {
  return (
    <>
      {/* <InnerPageHeader headline="Blog">
    
      </InnerPageHeader> */}
  <AllBlogsPosts />

      <Footer />
    </>
  );
}
