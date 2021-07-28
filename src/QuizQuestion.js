import React, {Component} from 'react';

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
      <section>
        <p>{this.props.question.instruction_text}</p>
      </section>
      <section className="buttons">
        <ul>
          //quiz question button logic goes here
        </ul>
      </section>
    </main>
    )
  }
}

export default QuizQuestion