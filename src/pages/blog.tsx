import Head from "next/head";

function blog() {
  return (
    <>
      <Head>
        <title>Blog 1</title>
        <meta name="description" content="a blog, idk" />
      </Head>

      <div className="fullflex">
        <p className="content w-3/4 h-3/4">
          A school for children in Nursery Kindergarten through Grade 1–9,
          Intertots Trilingual School places a strong emphasis on language
          skills among other subjects. They teach three languages: Thai,
          English, and Chinese. The first class begins at 7:10 am and ends at
          16:00. Each class has a different schedule depending on how much
          material needs to be learned; the older you are, the more lessons you
          need to learn. Lunch is served at 12:00 and is decently tasty; you can
          order food from the cafe if you need to, but you must be in grade 7 or
          higher to do so.
        </p>
      </div>
    </>
  );
}

export default blog;
