import React,{useState} from "react";
import loadable from "@loadable/component";
const TestDetails = loadable(() => import("../components/test-details/TestDetails"));
const TestList = loadable(() => import("../components/test-list/TestList"));

// markup
const LoadablePage = () => {
  const [hasComponentA, setHasComponentA] = useState(false);
  const [hasComponentB, setHasComponentB] = useState(false);
  return (
    <div className="container">
      <h1>Welcome to Gatsby v3 Loadable</h1>
      <section>
        <h3>Demo for loadable component</h3>
        <div>
          <label>Test List Component</label>
          <input
            type="checkbox"
            onChange={(event) => {
              setHasComponentA(event.target.checked);
            }}
          />
        </div>
        <div>
          <label>Test Details Component</label>
          <input
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
  );
};

export default LoadablePage;
