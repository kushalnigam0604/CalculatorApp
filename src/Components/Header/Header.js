import React from "react";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({handleToggleHistory}) => {
  return (
    <div className="header">
      <div className="menuIcon">
        <AiOutlineMenu onClick={handleToggleHistory}/>
      </div>
      <div className="headingIcon">Standard</div>
    </div>
  );
};

export default Header;
