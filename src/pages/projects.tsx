import React from 'react';
import Head from 'next/head';
import VideoList from './VideoList';

import Projects from '@/components/page/archive/Projects';

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Projects - DevInception</title>
      </Head> */}
      <VideoList />
      {/* <Projects /> */}
    </>
  );
}
