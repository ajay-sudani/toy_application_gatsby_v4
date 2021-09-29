import React, { useState } from "react";
import loadable from "@loadable/component";
import Meta from "../components/meta/Meta";
const TestDetails = loadable(
  () => import("../components/test-details/TestDetails")
);
const TestList = loadable(() => import("../components/test-list/TestList"));

// markup
const LoadablePage = () => {
  const [hasComponentA, setHasComponentA] = useState(false);
  const [hasComponentB, setHasComponentB] = useState(false);
  return (
    <>
      <Meta
        title="Toy Application"
        description="This is Toy application created using Gatsby V4"
      ></Meta>
      <div className="container" role="main">
        <h1>Welcome to Gatsby v4 Loadable</h1>
        <section>
          <h2>Demo for loadable component</h2>
          <div>
            <label>Test List Component</label>
            <input
              aria-label="list"
              type="checkbox"
              onChange={(event) => {
                setHasComponentA(event.target.checked);
              }}
            />
          </div>
          <div>
            <label>Test Details Component</label>
            <input
              aria-label="details"
              type="checkbox"
              onChange={(event) => {
                setHasComponentB(event.target.checked);
              }}
            />
          </div>
          <div>{hasComponentA ? <TestList></TestList> : null}</div>
          <div>{hasComponentB ? <TestDetails></TestDetails> : null}</div>
        </section>
      </div>
    </>
  );
};

export default LoadablePage;
