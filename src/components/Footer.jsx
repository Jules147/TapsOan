import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="other">
        Other (not-such-great) places to get the latest UK weather...
      </div>

      <a href="https://bbc.co.uk/weather">BBC WEATHER</a>
      <a href="https://news.sky.com/weather">SKY NEWS</a>
      <a href="https://www.metoffice.gov.uk/">MET OFFICE</a>
      <a href="https://taps-aff.co.uk/bristol/">TAPS-AAF</a>
    </footer>
  );
};

export default Footer;
