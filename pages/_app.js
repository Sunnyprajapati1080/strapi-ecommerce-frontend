import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>myEcommerce - ecommerce pwa powered by nextjs and strapi</title>
        <meta name="description" content="an ecommerce pwa powered by nextjs and strapi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
