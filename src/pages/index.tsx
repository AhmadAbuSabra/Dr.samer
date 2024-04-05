import React from 'react';
import Head from 'next/head';

import Home from '@/components/page/home/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Home - DevInception</title>
      </Head>

      <Home />
    </>
  );
}
