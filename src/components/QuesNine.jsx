import React from "react";
import "./Components.css";

const QuesNine = ({ onOptionChange }) => {
  const handleRadioChange = (event) => {
    const labelValue = event.target.nextSibling.textContent;
    onOptionChange(labelValue);
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesNine">
          Have you experienced any recent events that have affected your mental health?
          </label>
          <div className="quesAns">
            <input
              type="radio"
              name="optionNine"
              id="yesQuesNine"
              onChange={handleRadioChange}
            />
            <label htmlFor="yesQuesNine">Yes</label>
            <br />
            <input
              type="radio"
              name="optionNine"
              id="noQuesNine"
              onChange={handleRadioChange}
            />
            <label htmlFor="noQuesNine">No</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesNine;
