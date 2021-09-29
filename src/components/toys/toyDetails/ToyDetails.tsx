import * as React from "react";
import { Link } from "gatsby";
import { InView } from "react-intersection-observer";
import { IToyDetails } from "../../../interfaces/ToyDetails";
import * as toyDetailsStyles from "./ToyDetails.module.scss";

// markup
const ToyDetails = ({ toy }: { toy: IToyDetails }) => {
  return (
    <div className={toyDetailsStyles.toyContent}>
      <div className={toyDetailsStyles.imageContainer}>
        <Link to={`/toy-details/${toy.id}`}>
          <InView>
            <img src={toy.image.file.url} alt="No image found" />
          </InView>
        </Link>
      </div>
      <div className={toyDetailsStyles.details}>
        <p>
          <b>{toy.name}</b>
        </p>
        <p>
          {JSON.parse(toy.description.raw).content[0].content[0].value}
        </p>
        <p>Price : {toy.price}</p>
        <p>Rating : {toy.rating}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
