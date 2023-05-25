import Head from "next/head";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="eduVerse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Hello</h2>
    </div>
  );
}
