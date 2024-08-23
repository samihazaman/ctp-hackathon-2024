import React from "react";
import "./Components.css";

const QuesTen = ({ onOptionChange }) => {
  const handleRadioChange = (event) => {
    const labelValue = event.target.nextSibling.textContent;
    onOptionChange(labelValue);
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesTen">
          Are you feeling safe on campus?
          </label>
          <div className="quesAns">
            <input
              type="radio"
              name="optionTen"
              id="yesQuesTen"
              onChange={handleRadioChange}
            />
            <label htmlFor="yesQuesTen">Yes</label>
            <br />
            <input
              type="radio"
              name="optionTen"
              id="noQuesTen"
              onChange={handleRadioChange}
            />
            <label htmlFor="noQuesTen">No</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesTen;
