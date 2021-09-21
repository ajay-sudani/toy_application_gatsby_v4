import React from "react";
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
    <div className="container">
      <h1>Welcome to Gatsby v3 Toys Application</h1>
      <section>
        <Toys data={data.allContentfulToy.edges}></Toys>
      </section>
    </div>
  );
};

export default IndexPage;
