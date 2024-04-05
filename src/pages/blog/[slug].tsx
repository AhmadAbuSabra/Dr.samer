import React from 'react';
import Head from 'next/head';

import Post from '@/components/page/post/Post';

export default function Home() {
  return (
    <>
      <Head>
        <title>One not so fair industry norm - Blog - DevInception</title>
      </Head>

      <Post />
    </>
  );
}
