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
          <label htmlFor="quesEleven">
          Have you experienced any recent incidents that affected your safety?
          </label>
          <div className="quesAns">
            <input
              type="radio"
              name="optionEleven"
              id="yesQuesEleven"
              onChange={handleRadioChange}
            />
            <label htmlFor="yesQuesEleven">Yes</label>
            <br />
            <input
              type="radio"
              name="optionEleven"
              id="noQuesEleven"
              onChange={handleRadioChange}
            />
            <label htmlFor="noQuesEleven">No</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesEleven;
