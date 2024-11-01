import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="header" data-testid="header-2">
        {title}
      </h1>
      <h3 className="header" title="Header">
        Sub header
      </h3>
    </>
  );
}
