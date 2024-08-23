import React from "react";
import "./Components.css";

const QuesSeven = ({ onOptionChange }) => {
  const handleRadioChange = (event) => {
    const labelValue = event.target.nextSibling.textContent;
    onOptionChange(labelValue);
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesSeven">
          Have you had to skip meals or eat less due to lack of money in the past month?

          </label>
          <div className="quesAns">
            <input
              type="radio"
              name="optionSeven"
              id="yesQuesSeven"
              onChange={handleRadioChange}
            />
            <label htmlFor="yesQuesSeven">Yes</label>
            <br />
            <input
              type="radio"
              name="optionSeven"
              id="noQuesSeven"
              onChange={handleRadioChange}
            />
            <label htmlFor="noQuesSeven">No</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesSeven;
