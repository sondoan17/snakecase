import React from "react";
import { ArticleJsonLd } from "next-seo";

const ThankYouPage = () => {
  return (
    <>
      <ArticleJsonLd
        useAppDir={true}
        url="/thank-you"
        title="Thanks"
        images={[]}
        datePublished={""}
        authorName={undefined}
        description={""}
      />
      <p>thanks</p>
    </>
  );
};

export default ThankYouPage;
