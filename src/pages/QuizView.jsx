/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import "./style.css";
import QuesOne from "../components/QuesOne";
import QuesTwo from "../components/QuesTwo";
import QuesThree from "../components/QuesThree";
import QuesFour from "../components/QuesFour";
import QuesFive from "../components/QuesFive";
import QuesSix from "../components/QuesSix";
import QuesSeven from "../components/QuesSeven";
import QuesEight from "../components/QuesEight";
import QuesNine from "../components/QuesNine";
import QuesTen from "../components/QuesTen";
import QuesEleven from "../components/QuesEleven";


import { Link, useNavigate } from "react-router-dom";

const QuizView = () => {
  const [selectedQuesOneOption, setSelectedQuesOneOption] = useState(""); //question one answer
  const [selectedQuesTwoOption, setSelectedQuesTwoOption] = useState(""); // question two answer
  const [selectedQuesThreeOption, setSelectedQuesThreeOption] = useState(""); //question three answer
  const [selectedQuesFourOption, setSelectedQuesFourOption] = useState(""); //question four answer
  const [selectedQuesFiveOption, setSelectedQuesFiveOption] = useState(""); //question five answer
  const [selectedQuesSixOption, setSelectedQuesSixOption] = useState(""); //question six answer
  const [selectedQuesSevenOption, setSelectedQuesSevenOption] = useState(""); //question seven answer
  const [selectedQuesEightOption, setSelectedQuesEightOption] = useState(""); //question eight answer
  const [selectedQuesNineOption, setSelectedQuesNineOption] = useState(""); //question nine answer
  const [selectedQuesTenOption, setSelectedQuesTenOption] = useState(""); //question ten answer
  const [selectedQuesElevenOption, setSelectedQuesElevenOption] = useState(""); //question eleven answer
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

  const handleQuesSixOptionChange = (option) => {
    setSelectedQuesSixOption(option);
  };
  const handleQuesSevenOptionChange = (option) => {
    setSelectedQuesSevenOption(option);
  };
  const handleQuesEightOptionChange = (option) => {
    setSelectedQuesEightOption(option);
  };
  const handleQuesNineOptionChange = (option) => {
    setSelectedQuesNineOption(option);
  };
  const handleQuesTenOptionChange = (option) => {
    setSelectedQuesTenOption(option);
  };
  const handleQuesElevenOptionChange = (option) => {
    setSelectedQuesElevenOption(option);
  };


  // Navigate based on the selected option
  //if the user answer is no, take them back to home page
  useEffect(() => {
    if (selectedQuesOneOption === "No") {
      navigate("/");
    }
    else if (selectedQuesFiveOption!="" && (selectedQuesFourOption === "No" || selectedQuesFiveOption === "Yes")) {
      navigate("/housing");

    }
    else if (selectedQuesSevenOption!="" && (selectedQuesSixOption === "No" || selectedQuesSevenOption === "Yes")) {
      navigate("/food");
    }
    else if (selectedQuesNineOption!="" && (selectedQuesEightOption === "Yes" || selectedQuesNineOption === "Yes")) {
      navigate("/mental-health");
    }
    else if (selectedQuesElevenOption!="" && (selectedQuesTenOption === "No" || selectedQuesElevenOption === "Yes")) {
      navigate("/safety");
    }
    
  }, [selectedQuesOneOption,selectedQuesFourOption,selectedQuesFiveOption, navigate]);

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
            {selectedQuesThreeOption === "Food Insecurity" && (
              <>
                <QuesSix
                  onOptionChange={handleQuesSixOptionChange}
                ></QuesSix>
                <QuesSeven
                  onOptionChange={handleQuesSevenOptionChange}
                ></QuesSeven>
              </>
            )}
            {selectedQuesThreeOption === "Mental Health" && (
              <>
                <QuesEight
                  onOptionChange={handleQuesEightOptionChange}
                ></QuesEight>
                <QuesNine
                  onOptionChange={handleQuesNineOptionChange}
                ></QuesNine>
              </>
            )}
             {selectedQuesThreeOption === "Safety" && (
              <>
                <QuesTen
                  onOptionChange={handleQuesTenOptionChange}
                ></QuesTen>
                <QuesEleven
                  onOptionChange={handleQuesElevenOptionChange}
                ></QuesEleven>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default QuizView;
