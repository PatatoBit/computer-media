import type { NextPage } from "next";
import Head from "next/head";

import Blogs from "../components/Blogs";
import Map from "../components/Map";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Computer Media Project</title>
        <meta
          name="description"
          content="A computer project website, made with NextJS and TailwindCSS."
        />
        <link
          rel="icon"
          href="https://www.lego.com/cdn/cs/set/assets/blta93a030f7e94e881/21332.png?fit=bounds&format=png&width=1500&height=1500&dpr=1"
        />
        <meta
          property="og:image"
          content="https://thumbs2.imgbox.com/95/a9/rpCfIJHb_t.jpg"
        />
      </Head>

      <div className="fullflex">
        <div className="container">
          <h1 className="text-6xl text-center">Intertots Trillingual School</h1>
        </div>
      </div>

      <Map />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
