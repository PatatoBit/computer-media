import Head from "next/head";
import { useState } from "react";

function Blog() {
  const [isNegative, set] = useState(false);

  const switchState = () => {
    set(!isNegative);
    console.log("Switch state", isNegative);
  };

  if (!isNegative) {
    return (
      <>
        <Head>
          <title>Blog 1</title>
          <meta name="description" content="a blog, idk" />
        </Head>

        <div className="fullflex">
          <button className="text-red-500" onClick={switchState}>
            Go Negative
          </button>
          <Positive />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Blog 1</title>
          <meta name="description" content="a blog, idk" />
        </Head>

        <div className="fullflex">
          <button className="text-green-500" onClick={switchState}>
            Go Positive
          </button>
          <Negative />
        </div>
      </>
    );
  }
}

function Positive() {
  return (
    <p className="content w-3/4 h-3/4">
      A school for children in Nursery Kindergarten through Grade 1–9, Intertots
      Trilingual School places a strong emphasis on language skills among other
      subjects. They teach three languages: Thai, English, and Chinese. The
      first class begins at 7:10 am and ends at 16:00. Each class has a
      different schedule depending on how much material needs to be learned; the
      older you are, the more lessons you need to learn. Lunch is served at
      12:00 and is decently tasty; you can order food from the cafe if you need
      to, but you must be in grade 7 or higher to do so.
    </p>
  );
}

function Negative() {
  return (
    <p className="content w-3/4 h-3/4">
      Intertots trilingual school is a school for Nursery Kindergarten and Grade
      1~9 focusing on many education especially language skills. They teach 3
      languages: Thai, English, Chinese.The first class start at 7:10 am which
      is earlier than average school around the world and ends at 16:00.Every
      class has different schedules depend on how much they need to learn,the
      older you are the more lessons you need to learn.Launch at 12:00 which
      have decent-taste food or you can order food from cafe If you need to but
      you need to be atleast grade7 or above to order it.(ello patato,It’s
      actually so หมาไม่แดก but I can’t say that so pls delete this or come up
      with more polite word)On the other hand,due to too much education that
      also build up to students’ stress or lack of rest time.That contribute to
      students being unsociable or speak and answer less questions during
      class.More time used on education that effect them to have lesser time to
      do the activities they actually want to do such as improving their hobbies
      skill aside from educating.Eventhough their math and science are not
      really the best in the country but their language skills are pretty good.
    </p>
  );
}

export default Blog;
