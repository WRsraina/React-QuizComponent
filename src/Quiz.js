import React, { Component } from 'react';

let quizdata = require('./quiz_data.json');

class Quiz extends Component {
  constructor (props) {
    super(props);
    this.state = {quiz_postion: 1};
  }

  render() {
    return <div>
      <div className='QuizQuestion'>{quizdata.quiz_questions.instruction_text}</div>
    </div>
  }
}

export default Quiz;