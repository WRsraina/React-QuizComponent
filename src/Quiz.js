import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz_position: 1,
      quiz_title: "Title"
    }
  }

  handleClick = (event) => {
      this.setState((state, props) => {
        return { quiz_position: this.state.quiz_position + 1}
      })

      console.log(quizData.quiz_questions[this.state.quiz_position-1])
  }

  render() {
    const question = quizData.quiz_questions[this.state.quiz_position - 1]
    const {handleClick} = this

    return (
      <div onClick={handleClick}>
        <QuizQuestion question={question} />
      </div>
    )
  }
}


export default Quiz
