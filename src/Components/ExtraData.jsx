import "./ExtraData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExtraData = ({ extraData }) => {
  return (
    <div className="extra-container">
      <div className="extra-data">
        <FontAwesomeIcon
          icon={`fa-solid fa-weight-scale`}
          className="extra-data__icon"
        />
        <h3 className="data-type">Pressure</h3>
        <h2 className="pressure-data">{extraData?.pressure} mb</h2>
      </div>

      <div className="extra-data">
        <FontAwesomeIcon
          icon={`fa-solid fa-wind`}
          className="extra-data__icon"
        />
        <h3 className="data-type">Wind</h3>
        <h2 className="wind-data">{extraData?.wind} mph</h2>
      </div>
    </div>
  );
};

export default ExtraData;
