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
              name="optionEight"
              id="yesQuesEight"
              onChange={handleRadioChange}
            />
            <label htmlFor="yesQuesEight">Yes</label>
            <br />
            <input
              type="radio"
              name="optionEight"
              id="noQuesEight"
              onChange={handleRadioChange}
            />
            <label htmlFor="noQuesEight">No</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesEight;
