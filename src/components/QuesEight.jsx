import React from "react";
import "./Components.css";

const QuesEight = ({ onOptionChange }) => {
  const handleRadioChange = (event) => {
    const labelValue = event.target.nextSibling.textContent;
    onOptionChange(labelValue);
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesEight">
          Are you experiencing stress, anxiety, or depression that is affecting your daily life or academic performance?

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

export default QuesEight;
