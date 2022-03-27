import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = () => {
  const router = useRouter();

  let href = '';

  if (router && router.asPath) {
    const noParamsPath = router.asPath.split(/[?#]/);
    const hasResult = noParamsPath.length > 0;
    href = hasResult ? `${href}${noParamsPath[0]}` : href;
  }

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href={href} rel="canonical" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Los nuevos caminos de la migración centroamericana</title>
      <link rel="preload" as="image" href="/banner-costarica.jpg" />
      <link rel="preload" as="image" href="/banner-salvador.jpg" />
      <link rel="preload" as="image" href="/banner-guatemala.jpg" />
      <link rel="preload" as="image" href="/banner-honduras.jpg" />
      <link rel="preload" as="image" href="/banner-nicaragua.jpg" />
    </Head>
  );
};

export default Meta;