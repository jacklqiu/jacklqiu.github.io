import * as React from "react";
import IntroBox from "../components/IntroBox";

const IndexPage = () => {
  const name = "Jack Qiu";
  const summary = "";

  return (
    <main className="flex w-screen h-screen justify-center items-center">
      <title>Jack Qiu's website</title>
      <meta name="Jack Qiu's website" content="Jack Qiu's website"></meta>
      <IntroBox title={name} description={summary} />
    </main>
  );
};

export default IndexPage;
