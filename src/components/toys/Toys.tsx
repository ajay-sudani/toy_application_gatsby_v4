import * as React from "react";
import ToyDetails from "./toyDetails/ToyDetails";
import { IToyDetails } from "../../interfaces/ToyDetails";
import "./Toys.scss";

// markup
const Toys = ({
  data,
}: {
  data: {
    node: IToyDetails;
  }[];
}) => {
  return (
    <div className="toys-container">
      {data.map((toy: { node: IToyDetails }) => (
        <ToyDetails key={toy.node.id} toy={toy.node}></ToyDetails>
      ))}
    </div>
  );
};

export default Toys;
