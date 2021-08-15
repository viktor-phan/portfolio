import React from "react";

export const SessionLength = (props: any) => {
  return (
    <div className="container">
      <h4 className="title">Session Length</h4>
      <div className="interval-container">
        <button>Down</button>
        <p className="interval-length">{props.sessionLength}</p>
        <button>Up</button>
      </div>
    </div>
  );
};
