// Import necessary libraries and styles
import React from 'react';
import '../resources/scss/palettes/green-yard.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import SiteNav from '@/components/nav/SiteNav';
import { SSRProvider } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';

// Define the MyApp component
function MyApp({ Component, pageProps }: AppProps<{ session?: any }>) {
  const router = useRouter();

  // Define dynamic route conditions
  const isDynamicPatientFormRoute = router.pathname === '/PatientForm/[patientId]' && router.query.patientId;
  const isDynamicBlogRoute = router.pathname === '/blogs/[id]' && router.query.id;

  // Log route information (commented out for production)
  // console.log('Current Pathname:', router.pathname);
  // console.log(!isDynamicPatientFormRoute);
  // console.log(isDynamicBlogRoute);
  // console.log(router.query.patientId);
  // console.log(router.query.id);

  // Determine if SiteNav should be displayed
  const showSiteNav = router.pathname !== '/Login' && router.pathname !== '/MyRequest' && router.pathname !== '/MenuScreen'
    && router.pathname !== '/PatientForm' && router.pathname !== '/PatientList' 
    && router.pathname !== '/PatientFormPage' && router.pathname !== '/Appointments' && router.pathname !== '/ConsultationForm'
    && !isDynamicPatientFormRoute && router.pathname !== '/AttachmentManagement' && router.pathname !== '/SaveBlogPost' && router.pathname !=='/GoogleCalendar' ;

  // Component rendering
  return (
    <SessionProvider session={pageProps.session}> {/* Wrap your application with SessionProvider */}

    <SSRProvider>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      {/* Conditionally render SiteNav and introduce spacing with CSS */}
      <div style={{ marginBottom: '100px' }}> {/* Add spacing between components */}
        {showSiteNav && <SiteNav />}
      </div>
      {/* Render the main component with possible additional spacing or wrapper styles */}
      <div > {/* Adjust padding as needed for layout */}
        <Component {...pageProps} />
      </div>
    </SSRProvider>
    </SessionProvider>
  );
}

// Export the MyApp component
export default MyApp;
