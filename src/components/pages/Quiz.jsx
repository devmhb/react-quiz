import React from "react";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import Progressbar from "../Progressbar";
const Quiz = () => {
  return (
    <div class="container">
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <Progressbar />
      <Miniplayer />
    </div>
  );
};

export default Quiz;