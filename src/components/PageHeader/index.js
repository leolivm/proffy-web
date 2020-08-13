import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import backIcon from "../../assets/icons/back.svg";
import "./styles.css";

const PageHeader = ({ title, children, description }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt={backIcon} />
        </Link>
        <img src={logo} alt={logo} />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
