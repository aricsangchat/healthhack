import React from 'react'
import FillIn from './FillIn'
import Choice from './Choice'

const Element = props => {

  function renderElement() {
    return props.parags.map(pg => {
      if (parseInt(pg.id) === parseInt(props.id) && pg.field_answers === '') {
        return <FillIn key={pg.id} id={pg.id} title={pg.field_question} />
      } else if (parseInt(pg.id) === parseInt(props.id) && pg.field_answers !== '') {
        return <Choice key={pg.id} title={pg.field_question} answers={pg.field_answers} parags={props.parags} />
      }
    })
  }

  return (
    <div className="element">
      {renderElement()}
    </div>
  )
  
}


export default Element
