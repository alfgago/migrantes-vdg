import '../styles/globals.css';
import '../styles/fonts/stylesheet.css';
import React, { useRef } from 'react';
import { PageTransition } from 'next-page-transitions'
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter(); 

  return (
    <>
      {router.isReady && router.pathname ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
      ) : ''}
    </>
  )
}

export default MyApp
