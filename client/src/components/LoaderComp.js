import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoaderComp = () => {
  return (
    <Dimmer active inverted>
      <Loader inverted content="Loading" />
    </Dimmer>
  );
};

export default LoaderComp;
