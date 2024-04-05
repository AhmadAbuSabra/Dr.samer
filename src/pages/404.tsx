import React from 'react';
import Head from 'next/head';
import Error404 from '@/components/page/page/Error404';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - DevInception</title>
      </Head>
      <Error404 />
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
