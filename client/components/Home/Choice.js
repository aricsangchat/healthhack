import React from 'react'

const Choice = props => {

  function renderInput() {
    const answerArr = props.answers.split(', ')
    return answerArr.map(id => {
      return renderAnswer(id)
    })
  }

  function renderAnswer(id) {
    return props.parags.map(pg => {
      if (parseInt(pg.id) === parseInt(id)) {
        return (
          <div className="choice" key={pg.field_answer}>
            <p>{pg.field_answer}</p>
            <input type="radio" name='answer' value={pg.field_answer} />
          </div>
        )
      }
    })
  }

  return (
    <div>
      <h5>{props.title}</h5>
      <form>
        {renderInput()}
      </form>
    </div>
  )

  
}


export default Choice
