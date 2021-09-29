import React from "react";
import Meta from "../components/meta/Meta";
import loadable from "@loadable/component";
import { graphql, useStaticQuery } from "gatsby";
const Toys = loadable(() => import("../components/toys/Toys"));
import "../assets/styles/index.scss";

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ToysQuery {
      allContentfulToy {
        edges {
          node {
            id
            name
            description {
              raw
            }
            image {
              file {
                url
              }
            }
            price
            rating
          }
        }
      }
    }
  `);

  return (
    <>
      <Meta
        title="Toy Application"
        description="This is Toy application created using Gatsby V4"
      ></Meta>
      <div role="main">
        <h1>Welcome to Gatsby v4 Toys Application</h1>
      </div>
      <div className="container">
        <section role="contentinfo">
          <Toys data={data.allContentfulToy.edges}></Toys>
        </section>
      </div>
    </>
  );
};

export default IndexPage;
