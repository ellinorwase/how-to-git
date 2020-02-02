import React, { Component } from "react";
import { QuizData } from "./QuizData";
import "../css/quiz.css";
// import Menu from "../components/menu";
import { Link } from "react-router-dom";

export class quiz extends Component {
  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: [],
    score: 0,
    disabled: true
    // myAnswer: null,
    // isEnd: false
  };

  loadQuiz = () => {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        questions: QuizData[currentQuestion].question,
        options: QuizData[currentQuestion].options,
        answers: QuizData[currentQuestion].answer,
        quizEnd: false
      };
    });
  };

  componentDidMount() {
    this.loadQuiz();
  }

  nextQuestionHandler = () => {
    const { userAnswer, answers, score } = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });

    if (userAnswer === answers) {
      this.setState({
        score: score + 1
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: QuizData[currentQuestion].question,
          options: QuizData[currentQuestion].options,
          answers: QuizData[currentQuestion].answer
        };
      });
    }
  }

  checkAnswer = answer => {
    this.setState({
      userAnswer: answer,
      disabled: false
    });
  };

  finishHandler = () => {
    if (this.state.currentQuestion === QuizData.length - 1) {
      this.setState({
        quizEnd: true
      });
    }
  };

  renderBackButton = () => (
    <div>
      <Link to={"/"}>Tillbaka</Link>
    </div>
  );
  render() {
    const {
      questions,
      options,
      currentQuestion,
      userAnswer,
      quizEnd
    } = this.state;

    if (quizEnd) {
      return (
        <div className="quiz-container">
          {this.renderBackButton()}
          <div className="quiz-box">
            <h2>Game Over</h2>
            <p>Final score: {this.state.score} points</p>
            <p>Rätt svar på frågorna var:</p>
            <ul>
              {QuizData.map((item, index) => (
                <li className="right-options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className="quiz-container">
        {this.renderBackButton()}
        <div className="quiz-box">
          <div className="quiz-form" id="quiz">
            <h2>{questions}</h2>
            <br></br>
            <span>{`Questions ${currentQuestion} out of ${QuizData.length -
              1}`}</span>

            {options.map(option => (
              <p
                key={option.id}
                className={`alternative
            ${userAnswer === option ? "selected" : null}
            `}
                onClick={() => this.checkAnswer(option)}
              >
                {option}
              </p>
            ))}
            {currentQuestion < QuizData.length - 1 && (
              <button
                disabled={this.state.disabled}
                onClick={this.nextQuestionHandler}
              >
                Nästa
              </button>
            )}
            {currentQuestion === QuizData.length - 1 && (
              <button onClick={this.finishHandler}>Räkna Ihop</button>
            )}

            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default quiz;
