import Carousel from "@/components/Carousel";
import { Beers } from "../data/beers";
import Card from "@/components/Card";

import React from "react";
import ScrollIndicator from "@/components/ScrollIndicator";

const test = () => {
  return (
    <div>
      <Carousel count={Beers.length}>
        {Beers.map((item, key) => {
          return <Card info={item} key={key} />;
        })}
      </Carousel>
    </div>
  );
};

export default test;
