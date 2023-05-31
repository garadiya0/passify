import React from "react";
import "./Footer.css";

const Footer = () => {
  const openLinktreeLink = () => {
    const githubURL = "https://github.com/garadiya0";
    /* eslint-disable no-undef */
    chrome.tabs.create({ url: githubURL, active: false });
  };
  return (
    <footer className="Footer">
      MADE WITH <img src="/heart.svg" height={17} width={17} alt="heart-icon" />{" "}
      BY
      <span onClick={openLinktreeLink}>HIMANSHU</span>
    </footer>
  );
};

export default Footer;
