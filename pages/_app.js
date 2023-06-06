import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Script from "next/script";
import { useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from '../redux/store'

export default function App({ Component, pageProps }) {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.bundle")
   },[])
  return (
      <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Provider store={store}>
     <Layout>
      <Component {...pageProps} />
    </Layout>
      </Provider>
      </>
  )
}
