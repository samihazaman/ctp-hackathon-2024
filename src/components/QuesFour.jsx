import React from "react";
import "./Components.css";

const QuesFour= ({ onOptionChange }) => {
  const handleRadioChange = (event) => {
    const labelValue = event.target.nextSibling.textContent;
    onOptionChange(labelValue);
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesFour">
            Do you have stable housing where you can live and study comfortably?
          </label>
          <div className="quesAns">
            <input
              type="radio"
              name="optionFour"
              id="yesQuesFour"
              onChange={handleRadioChange}
            />
            <label htmlFor="yesQuesFour">Yes</label>
            <br />
            <input
              type="radio"
              name="optionFour"
              id="noQuesFour"
              onChange={handleRadioChange}
            />
            <label htmlFor="noQuesFour">No</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesFour;
