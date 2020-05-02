import React from "react";

import "./style.css";

export function SearchInput(props) {
  return (
    <input
      className="input-search"
      placeholder={props.placeholder}
      type="search"
      value={props.value}
      onChange={props.onChange}
    />
  );
}
