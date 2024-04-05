import React from 'react';
import Head from 'next/head';

import Project from '@/components/page/post/Project';

export default function Home() {
  return (
    <>
      <Head>
        <title>Buhalbu.com - Project - Simply</title>
      </Head>

      <Project />
    </>
  );
}
