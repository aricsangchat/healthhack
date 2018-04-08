import React from 'react'
import Element from './Element'

const Section = props => {

  function renderElements() {
    return props.parags.map(pg => {
      if (parseInt(pg.id) === parseInt(props.id)) {
        const elementIdArr = pg.field_form_elements.split(', ')
        return elementIdArr.map(id => {
          return <Element key={id} id={id} parags={props.parags} />
        })
      }
    })
  }

  function renderSectionTitle() {
    return props.parags.map(pg => {
      if (parseInt(pg.id) === parseInt(props.id)) {
        return <h3 key={pg.field_section_title} className='section-title'>{pg.field_section_title}</h3>
      }
    })
  }

  return (
    <div className="section">
      {renderSectionTitle()}
      {renderElements()}
    </div>
  )
  
}


export default Section
