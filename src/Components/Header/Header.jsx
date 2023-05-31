import React from "react";
import DarkModeBtn from "../DarkModeBtn";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <p className="Logo">Passify</p>
      <div className="Dark-Mode-Btn">
        <DarkModeBtn size="small" defaultChecked={false} />
      </div>
    </div>
  );
};

export default Header;
