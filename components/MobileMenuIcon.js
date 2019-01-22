import React from "react";

const MobileMenuIcon = props => (
  <div className={`mobile-icon ${props.open}`}>
    <a onClick={props.menuClick}>
      <i className="material-icons">menu</i>
    </a>
  </div>
);

export default MobileMenuIcon;
