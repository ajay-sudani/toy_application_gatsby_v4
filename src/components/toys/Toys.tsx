import * as React from "react";
import ToyDetails from "./toyDetails/ToyDetails";
import { IToyDetails } from "../../interfaces/ToyDetails";
import * as toysStyles from "./Toys.module.scss";

const Toys = ({
  data,
}: {
  data: {
    node: IToyDetails;
  }[];
}) => {
  return (
    <div className={toysStyles.toysContainer}>
      {data.map((toy: { node: IToyDetails }) => (
        <ToyDetails key={toy.node.id} toy={toy.node}></ToyDetails>
      ))}
    </div>
  );
};

export default Toys;
