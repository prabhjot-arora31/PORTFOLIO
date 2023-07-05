import React from "react";

export default function Logo(props) {
  return (
    <div className="logo">
      <img
        src="data:image/png;base64,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"
        alt=""
        className={props.logo}
      />
    </div>
  );
}
