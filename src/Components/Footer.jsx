import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer__text">
        Designed and Built by{" "}
        <a href="https://github.com/victorcodess" target="_blank">
          Victor Williams
        </a>{" "}
        with React, CSS, Chart.js, GeolocationAPI, and WeatherAPI.
      </h3>
    </div>
  );
};

export default Footer;
