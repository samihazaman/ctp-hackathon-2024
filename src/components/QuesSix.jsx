import React from "react";
import "./Components.css";

const QuesSix = ({ onOptionChange }) => {
  const handleRadioChange = (event) => {
    const labelValue = event.target.nextSibling.textContent;
    onOptionChange(labelValue);
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesSix">
          Do you have regular access to enough food for yourself and your family?

          </label>
          <div className="quesAns">
            <input
              type="radio"
              name="optionSix"
              id="yesQuesSix"
              onChange={handleRadioChange}
            />
            <label htmlFor="yesQuesSix">Yes</label>
            <br />
            <input
              type="radio"
              name="optionSix"
              id="noQuesSix"
              onChange={handleRadioChange}
            />
            <label htmlFor="noQuesSix">No</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesSix;
