import React from "react";
import "./Components.css";

const QuesFive = ({ onOptionChange }) => {
  const handleRadioChange = (event) => {
    const labelValue = event.target.nextSibling.textContent;
    onOptionChange(labelValue);
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesFive">
            Have you experienced any housing instability (e.g., eviction,
            homelessness) in the past year?
          </label>
          <div className="quesAns">
            <input
              type="radio"
              name="optionFive"
              id="yesQuesFive"
              onChange={handleRadioChange}
            />
            <label htmlFor="yesQuesFive">Yes</label>
            <br />
            <input
              type="radio"
              name="optionFive"
              id="noQuesFive"
              onChange={handleRadioChange}
            />
            <label htmlFor="noQuesFive">No</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesFive;
