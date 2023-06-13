import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <>
    <Html lang="en">
  {/* <!-- Favicons --> */}
  <Head>
  <link href="assets/img/favicon.png" rel="icon"></link>
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link>

  {/* <!-- Template Main CSS File --> */}
  <link href="assets/css/style.css" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>

    </>
  )
}
