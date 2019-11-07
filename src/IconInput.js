import React from "react";

import { PARAMS } from "./App";

export default ({ onSubmit, onInputChange }) => {
  return (
    <>
      <input
        type="text"
        data-name={PARAMS.TEXT}
        placeholder="Text"
        onChange={onInputChange}
      />
      <input
        type="text"
        data-name={PARAMS.CIRCLE.X}
        placeholder="Circle Position X"
        onChange={onInputChange}
      />
      <input
        type="text"
        data-name={PARAMS.CIRCLE.Y}
        placeholder="Circle Position Y"
        onChange={onInputChange}
      />
      <input
        type="text"
        data-name={PARAMS.CIRCLE.R}
        placeholder="Circle Radius"
        onChange={onInputChange}
      />
      <input
        type="text"
        data-name={PARAMS.CIRCLE.FILL}
        placeholder="Circle Color"
        onChange={onInputChange}
      />
      <input
        type="text"
        data-name={PARAMS.COLOR}
        placeholder="Icon Color"
        onChange={onInputChange}
      />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};
