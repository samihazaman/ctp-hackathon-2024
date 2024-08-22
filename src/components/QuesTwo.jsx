import React from "react";
import "./Components.css";

const QuesTwo = ({ onOptionChange }) => {
  const handleOptionChange = (event) => {
    const optionValue = event.target.value;
    onOptionChange(optionValue)
  };

  return (
    <>
      <form>
        <div className="quesBox">
          <label htmlFor="quesTwo">Which CUNY college do you go to?</label>
          <div className="quesAns">
            <select name="college" id="college" onChange={handleOptionChange}>
              <option value="The City College of New York">
                The City College of New York
              </option>
              <option value="Brooklyn College">Brooklyn College</option>
              <option value="College of Staten Island">
                College of Staten Island
              </option>
              <option value="York College">York College</option>
              <option value="Lehman College, CUNY">Lehman College, CUNY</option>
              <option value="LaGuardia Community College">
                LaGuardia Community College
              </option>
              <option value="CUNY School of Law">CUNY School of Law</option>
              <option value="CUNY Graduate School of Public Health & Health Policy">
                CUNY Graduate School of Public Health & Health Policy
              </option>
              <option value="Hunter College">Hunter College</option>
              <option value="New York City College of Technology">
                New York City College of Technology
              </option>
              <option value="CUNY School of Professional Studies | CUNY SPS">
                CUNY School of Professional Studies | CUNY SPS
              </option>
              <option value="Medgar Evers College, CUNY">
                Medgar Evers College, CUNY
              </option>
              <option value="John Jay College of Criminal Justice">
                John Jay College of Criminal Justice
              </option>
              <option value="CUNY Graduate Center">CUNY Graduate Center</option>
              <option value="CUNY School of Labor and Urban Studies">
                CUNY School of Labor and Urban Studies
              </option>
              <option value="CUNY School of Medicine">
                CUNY School of Medicine
              </option>
              <option value="Queens College, City University of New York">
                Queens College, City University of New York
              </option>
              <option value="Baruch College">Baruch College</option>
              <option value="Kingsborough Community College">
                Kingsborough Community College
              </option>
              <option value="Borough of Manhattan Community College">
                Borough of Manhattan Community College
              </option>
              <option value="Hostos Community College">
                Hostos Community College
              </option>
              <option value="Macaulay Honors College">
                Macaulay Honors College
              </option>
              <option value="Craig Newmark Graduate School of Journalism at CUNY">
                Craig Newmark Graduate School of Journalism at CUNY
              </option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuesTwo;
