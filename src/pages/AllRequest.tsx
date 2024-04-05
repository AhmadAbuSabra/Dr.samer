// pages/yourPage.tsx
import React from 'react';
// import RequestTable from './RequestTable';
import Head from 'next/head';
import AllRequestTable from './AllRequestsTable';

const AllRequest = () => {


    return (
        <div >
            {/* Uncomment if you want to include the head */}
            {/* <Head>
                <title>طلباتي</title>
            </Head> */}
            <AllRequestTable />
        </div>
    );
}; 

export default AllRequest;
