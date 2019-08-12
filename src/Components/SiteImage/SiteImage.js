import React from "react";
import homepageSVG from "../../Images/combined.svg";
import "./SiteImage.css";

function SiteImage() {
    return <img src={homepageSVG} alt="site intro" className="site-image" />;
}

export default SiteImage;
