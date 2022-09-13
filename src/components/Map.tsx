import React from "react";

function Map() {
  return (
    <>
      <div className="fullflex">
        <div className="container">
          <h1 className="text-5xl text-center">About</h1>
          <p className="content my-3">
            A school in Chacheongsao, Thailand. That teaches 3 languages. Used
            to be somewhere else but they moved here back in around 2017. I
            can&apos;t remember
          </p>

          <iframe
            className="shadow-md rounded-lg"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=M29W+534,%20Sothon,%20Mueang%20Chachoengsao%20District,%20Chachoengsao%2024000+(Intertots%20Trillingual%20Schoi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Map;
