import React from "react";
import "./Components.css";

const QuesOne = ({ onOptionChange }) => {
  const handleRadioChange = (event) => {
    const labelValue = event.target.nextSibling.textContent;
    onOptionChange(labelValue);
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesOne">Are You a CUNY student?</label>
          <div className="quesAns">
            <input
              type="radio"
              name="optionOne"
              id="yesQuesOne"
              onChange={handleRadioChange} 
            />
            <label htmlFor="yesQuesOne">Yes</label>
            <br />
            <input
              type="radio"
              name="optionOne"
              id="noQuesOne"
              onChange={handleRadioChange} 
            />
            <label htmlFor="noQuesOne">No</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesOne;
