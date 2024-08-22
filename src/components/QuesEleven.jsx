import React from "react";
import "./Components.css";

const QuesEleven = ({ onOptionChange }) => {
  const handleRadioChange = (event) => {
    const labelValue = event.target.nextSibling.textContent;
    onOptionChange(labelValue);
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesOne">
          Have you experienced any recent incidents that affected your safety?
          </label>
          <div className="quesAns">
            <input
              type="radio"
              name="option"
              id="yes"
              onChange={handleRadioChange}
            />
            <label htmlFor="yes">Yes</label>
            <br />
            <input
              type="radio"
              name="option"
              id="no"
              onChange={handleRadioChange}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesEleven;
