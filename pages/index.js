import Head from "next/head";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="eduVerse" />
        <link rel="icon" href="/favicon.ico" />
        <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
      rel="stylesheet"/>
      </Head>
      <h2>Hello</h2>
    </div>
  );
}
