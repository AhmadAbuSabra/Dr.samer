// pages/yourPage.tsx
import React from 'react';
import RequestTable from './RequestTable';
import Head from 'next/head';

const MyRequest = () => {


    return (
        <div >
            {/* Uncomment if you want to include the head */}
            {/* <Head>
                <title>طلباتي</title>
            </Head> */}
            <RequestTable />
        </div>
    );
}; 

export default MyRequest;
