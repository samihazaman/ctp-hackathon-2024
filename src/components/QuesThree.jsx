import React from "react";
import "./Components.css";

const QuesThree = ({ onOptionChange }) => {
  const handleRadioChange = (event) => {
    const labelValue = event.target.nextSibling.textContent;
    onOptionChange(labelValue);
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesOne">
            Which of the following areas do you need help with?
          </label>
          <div className="quesAns">
            <input
              type="radio"
              name="option"
              id="housing"
              onChange={handleRadioChange}
            />
            <label htmlFor="housing">Housing</label>
            <br />
            <input
              type="radio"
              name="option"
              id="food"
              onChange={handleRadioChange}
            />
            <label htmlFor="food">Food Insecurity</label>
            <br />
            <input
              type="radio"
              name="option"
              id="mentalHealth"
              onChange={handleRadioChange}
            />
            <label htmlFor="mentalHealth">Mental Health</label>
            <br />
            <input
              type="radio"
              name="option"
              id="safety"
              onChange={handleRadioChange}
            />
            <label htmlFor="safety">Safety</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesThree;
