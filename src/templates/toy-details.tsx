import React from "react";
import { InView } from "react-intersection-observer";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import Meta from "../components/meta/Meta";
import "./toy-details.scss";

// markup
const ToyDetails = ({ data, pageContext }) => {
  const imageData = convertToBgImage(getImage(pageContext.backgroundImage));
  const { contentfulToy: toy } = data;

  return (
    <>
      <Meta
        title="Toy Application"
        description="This is Toy application created using Gatsby V4"
      ></Meta>
      <BackgroundImage {...imageData} alt="background image" role="main">
        <div className="toy-details-container">
          <div className="image-container">
            <InView>
              <img src={toy.image.file.url} alt="No image found" />
            </InView>
          </div>
          <div className="details">
            <p className="name">
              <b>{toy.name}</b>
            </p>
            <p className="description">
              {JSON.parse(toy.description.raw).content[0].content[0].value}
            </p>
            <p className="price">Price : {toy.price}</p>
            <p className="rating">Rating : {toy.rating}</p>
          </div>
        </div>
      </BackgroundImage>
    </>
  );
};

export const query = graphql`
  query ($id: String!) {
    contentfulToy(id: { eq: $id }) {
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
`;

export default ToyDetails;
