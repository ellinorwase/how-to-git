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
    const { userAnswer, answers, score } = this.state;

    if (this.state.currentQuestion === QuizData.length - 1) {
      this.setState({
        quizEnd: true,
        score: userAnswer === answers ? score + 1 : score
      });
    }
  };

  renderBackButton = () => (
    <Link to={"/how-to-git/"}>
      <button className="quiz-button">Tillbaka till start</button>
    </Link>
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
            <p>
              Final score: {this.state.score} / {QuizData.length} poäng
            </p>
            <p>Rätt svar på frågorna var:</p>
            <ul className="right-answers">
              {QuizData.map((item, index) => (
                <li className="right-options" key={index}>
                  {item.id}. &nbsp;
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
            <h4>{questions}</h4>
            <br></br>
            <span>{`Fråga ${currentQuestion + 1} av ${QuizData.length}`}</span>

            {options.map((option, index) => (
              <p
                key={index}
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
                className="quiz-button"
              >
                Nästa
              </button>
            )}
            {currentQuestion === QuizData.length - 1 && (
              <button className="quiz-button" onClick={this.finishHandler}>
                Räkna Ihop
              </button>
            )}
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default quiz;
