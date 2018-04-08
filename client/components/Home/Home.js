import React, { Component } from 'react'
import { connect } from 'react-redux'
const axios = require('axios')
import {
  getForms,
  getParagraphs
} from '../../redux/modules/drupal'
import Section from './Section'


class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      index: 0
    }
    
  }

  componentWillMount() {
    this.props.dispatchGetForms();
    this.props.dispatchGetParagraphs();
  }

  renderFormSection(index) {
    if (this.props.state.drupal.forms.length > 0) {

      const sectionIdArr = this.props.state.drupal.forms[0].field_form_elements.split(', ')
      console.log(sectionIdArr)

      if (index >= sectionIdArr.length - 1) {
        return (
          <div>
            <Section key={sectionIdArr[sectionIdArr.length - 1]} id={sectionIdArr[sectionIdArr.length - 1]} parags={this.props.state.drupal.paragraphs} />
            <button onClick={() => this.handleFinish() }>Finish</button>
          </div>
        );

      } else {
        return sectionIdArr.map((id, i) => {
          if ( i === index ) {
            return <Section key={parseInt(id)} id={parseInt(id)} parags={this.props.state.drupal.paragraphs} />;
          }
        })
      }
    }
  }

  renderFormTitle() {
    if (this.props.state.drupal.forms.length > 0) {
      return <h1 className='text-center page-title'>{this.props.state.drupal.forms[0].title}</h1>
    }
  }

  // renderFormList() {
  //   if (this.props.state.drupal.forms.length > 0) {
  //     this.props.state.drupal.forms.map(form => {
  //       return <button onClick={() => handleFormSelect(form.nid) }>{form.title}</button>
  //     })
  //   }
  // }

  handleNext() {
    this.setState({
      index: this.state.index + 1
    })
  }

  handleBack() {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1
      })
    }
  }

  handleFinish() {
    
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">

        {this.renderFormTitle()}
        {this.renderFormSection(this.state.index)}
        <button onClick={() => this.handleBack() }>Back</button>
        <button onClick={() => this.handleNext() }>Next</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetForms() {
      dispatch(getForms())
    },
    dispatchGetParagraphs() {
      dispatch(getParagraphs())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
