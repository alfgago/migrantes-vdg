import '../styles/globals.css';
import '../styles/fonts/stylesheet.css';
import React, { useRef } from 'react';
import { PageTransition } from 'next-page-transitions'
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <PageTransition timeout={1000} classNames="page-transition">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageTransition>
    </>
  )
}

export default MyApp
