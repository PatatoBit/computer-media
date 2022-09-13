import type { NextPage } from "next";
import Head from "next/head";
import Blogs from "../components/Blogs";
import Map from "../components/Map";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Computer Media Project</title>
        <meta
          name="description"
          content="ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://thumbs2.imgbox.com/95/a9/rpCfIJHb_t.jpg"
        />
      </Head>

      <main className="fullflex">
        <div className="container">
          <h1 className="text-6xl text-center">Intertots Trillingual School</h1>
        </div>
      </main>

      <Map />
      <Blogs />
    </>
  );
};

export default Home;
