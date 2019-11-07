/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./App.css";
import IconInput from "./IconInput";

export const PARAMS = {
  TEXT: "TEXT",
  CIRCLE: {
    X: "X",
    Y: "Y",
    R: "R",
    FILL: "FILL"
  },
  COLOR: "COLOR"
};

const iconMaker = props => {
  const [text, setIconText] = useState("Swetha");
  const [circle, setCircle] = useState({
    x: "50",
    y: "50",
    r: "30",
    fill: "#000"
  });
  const [color, setIconColor] = useState("white");

  const submitValue = e => {
    const formData = {
      text,
      circle,
      color
    };
  };

  const onInputChange = e => {
    switch (e.target.dataset.name) {
      case PARAMS.TEXT: {
        setIconText(e.target.value);
        break;
      }
      case PARAMS.CIRCLE.X: {
        setCircle({ ...circle, x: e.target.value });
        break;
      }
      case PARAMS.CIRCLE.Y: {
        setCircle({ ...circle, y: e.target.value });
        break;
      }
      case PARAMS.CIRCLE.R: {
        setCircle({ ...circle, r: e.target.value });
        break;
      }
      case PARAMS.CIRCLE.FILL: {
        setCircle({ ...circle, fill: e.target.value });
        break;
      }
      case PARAMS.COLOR: {
        setIconColor(e.target.value);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div className="iconContainer">
      <div>
        <IconInput onSubmit={submitValue} onInputChange={onInputChange} />
      </div>
      <svg height={"100vh"} width={"100vw"} viewBox={"0 0 100 100"}>
        <circle cx={circle.x} cy={circle.y} r={circle.r} fill={circle.fill} />
        <text x="25" y="55" fill={color}>
          {text}
        </text>
      </svg>
    </div>
  );
};

export default iconMaker;
