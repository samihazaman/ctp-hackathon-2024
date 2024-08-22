/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import "./style.css";
import QuesOne from "../components/QuesOne";
import QuesTwo from "../components/QuesTwo";
import QuesThree from "../components/QuesThree";
import QuesFour from "../components/QuesFour";
import QuesFive from "../components/QuesFive";
import { useNavigate } from "react-router-dom";

const QuizView = () => {
  const [selectedQuesOneOption, setSelectedQuesOneOption] = useState(""); //question one answer
  const [selectedQuesTwoOption, setSelectedQuesTwoOption] = useState(""); // question two answer
  const [selectedQuesThreeOption, setSelectedQuesThreeOption] = useState(""); //question three answer
  const [selectedQuesFourOption, setSelectedQuesFourOption] = useState(""); //question four answer
  const [selectedQuesFiveOption, setSelectedQuesFiveOption] = useState(""); //question five answer
  const navigate = useNavigate();

  //keep track of user selection for question one
  const handleQuesOneOptionChange = (option) => {
    setSelectedQuesOneOption(option);
  };

  //keep track of user answer for question two
  const handleQuesTwoOptionChange = (option) => {
    setSelectedQuesTwoOption(option);
  };

  const handleQuesThreeOptionChange = (option) => {
    setSelectedQuesThreeOption(option);
  };

  const handleQuesFourOptionChange = (option) => {
    setSelectedQuesFourOption(option);
  };
  const handleQuesFiveOptionChange = (option) => {
    setSelectedQuesFiveOption(option);
  };
  // Navigate based on the selected option
  //if the user answer is no, take them back to home page
  useEffect(() => {
    if (selectedQuesOneOption === "No") {
      navigate("/");
    }
  }, [selectedQuesOneOption, navigate]);

  return (
    <>
      <div className="questions">
        <QuesOne onOptionChange={handleQuesOneOptionChange} />
        {selectedQuesOneOption === "Yes" && (
          <>
            <QuesTwo onOptionChange={handleQuesTwoOptionChange} />
            <QuesThree onOptionChange={handleQuesThreeOptionChange} />
            {selectedQuesThreeOption === "Housing" && (
              <>
                <QuesFour
                  onOptionChange={handleQuesFourOptionChange}
                ></QuesFour>
                <QuesFive
                  onOptionChange={handleQuesFiveOptionChange}
                ></QuesFive>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default QuizView;
