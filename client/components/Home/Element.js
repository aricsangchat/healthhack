import React from 'react'
import FillIn from './FillIn'
import Choice from './Choice'

const Element = props => {

  function renderElement() {
    return props.parags.map(pg => {
      if (parseInt(pg.id) === parseInt(props.id) && (pg.field_answers === '' && pg.field_text_area === '')) {
        return <FillIn key={pg.id} id={pg.id} title={pg.field_question} />
      } else if (parseInt(pg.id) === parseInt(props.id) && (pg.field_answers !== '' && pg.field_text_area === '')) {
        return <Choice key={pg.id} title={pg.field_question} answers={pg.field_answers} parags={props.parags} />
      } else if (parseInt(pg.id) === parseInt(props.id) && pg.field_text_area !== '') {
        return <p>{pg.field_text_area}</p>
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
