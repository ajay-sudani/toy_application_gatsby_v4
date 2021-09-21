import * as React from "react";
import ToyDetails from "./toyDetails/ToyDetails";
import "./Toys.scss";

// markup
const Toys = ({ data }) => {
  return (
    <div className="toys-container">
      {data.map((toy) => (
        <ToyDetails key={toy.node.id} toy={toy.node}></ToyDetails>
      ))}
    </div>
  );
};

export default Toys;
