import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import Progressbar from "../Progressbar";
import useQuestionsList from "../hooks/useQuestionsList";

const Quiz = () => {
  const { id } = useParams();
  const [currentQuestions, setCurrentQuestions] = useState();
  const { loading, error, questions } = useQuestionsList(id);
  return (
    <div className="container">
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <Answers />
      <Progressbar />
      <Miniplayer />
    </div>
  );
};

export default Quiz;
