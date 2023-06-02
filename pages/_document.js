import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <>
    <Html lang="en">
  {/* <!-- Favicons --> */}
  <Head>
  <link href="assets/img/favicon.png" rel="icon"></link>
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link>

  {/* <!-- Google Fonts --> */}
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"></link>

  {/* <!-- Vendor CSS Files --> */}
  <link href="assets/vendor/aos/aos.css" rel="stylesheet"></link>
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"></link>
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></link>
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"></link>
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"></link>
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"></link>

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
