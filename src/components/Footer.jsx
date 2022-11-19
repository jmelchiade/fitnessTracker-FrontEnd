import React from "react";
import gitHub from "./gitHub.png";

const Footer = () => {
  const url = "https://github.com/jmelchiade/fitnessTracker-FrontEnd";
  // <img src={gitHub} alt="gitHub" id="githubImg"></img>;

  return (
    <div id="footer">
      <div>
        <div>
          <a href={url}>
            <img id="githubImg" src={gitHub} alt="thumb" />
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
