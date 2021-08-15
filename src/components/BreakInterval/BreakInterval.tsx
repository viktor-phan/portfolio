import React from "react";

export const BreakInterval = (props: any) => {
  return (
    <div className="container">
      <h4 className="title">Break Length</h4>
      <div className="interval-container">
        <button>Down</button>
        <p className="interval-length">{props.breakInterval}</p>
        <button>Up</button>
      </div>
    </div>
  );
};
