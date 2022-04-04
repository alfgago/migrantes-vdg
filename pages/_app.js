import '../styles/globals.css';
import '../styles/fonts/stylesheet.css';
import Head from 'next/head';
import React, { useRef } from 'react';
import { PageTransition } from 'next-page-transitions'
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter(); 

  const title = 'Los nuevos caminos de la migración centroamericana';
  const description = 'La migración en Centroamérica como fenómeno constante no ha cambiado en las últimas décadas. Lo que sí está cambiando son los motivos por los que la gente se va y la ruta para huir de la región.';
  const featuredImage = 'https://migrantes.vozdeguanacaste.com/principal.jpg'

  return (
    <>
      {router.isReady && router.pathname ? (
          <PageTransition timeout={1000} classNames="page-transition">
            <Head>
              <title>{title}</title>
              <meta name="description" content={description} />
              <meta property="og:image" content={featuredImage} />
              <meta property="og:locale" content="es_ES" />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PageTransition>
      ) : ''}
    </>
  )
}

export default MyApp
