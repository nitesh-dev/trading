import React, { useState } from "react";

import "../../styles/widgets/toggle.css";

export function ToggleWidget(props: {
  default: boolean;
  onChange: (isChecked: boolean) => void;
}) {
  function onCheckChanged(isChecked: boolean) {
    props.onChange(isChecked);
  }

  return (
    <div className="toggle">
      <input
        type="checkbox"
        defaultChecked={props.default}
        onChange={(e) => onCheckChanged(e.target.checked)}
      />
      <svg
        className="on"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
      </svg>

      <svg
        className="off"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M384 112c79.5 0 144 64.5 144 144s-64.5 144-144 144H192c-79.5 0-144-64.5-144-144s64.5-144 144-144H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
      </svg>
    </div>
  );
}
