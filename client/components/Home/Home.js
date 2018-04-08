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
      index: 0,
      formIndex: 0,
      finish: false
    }
    
  }

  componentWillMount() {
    this.props.dispatchGetForms();
    this.props.dispatchGetParagraphs();
  }

  renderFormSection(index,formIndex, finish) {
    if (this.props.state.drupal.forms.length > 0) {

      const sectionIdArr = this.props.state.drupal.forms[formIndex].field_form_elements.split(', ')
      console.log(sectionIdArr)

      if (index >= sectionIdArr.length - 1 && finish === false) {
        return (
          <div>
            <Section key={sectionIdArr[sectionIdArr.length - 1]} id={sectionIdArr[sectionIdArr.length - 1]} parags={this.props.state.drupal.paragraphs} />
            <button onClick={() => this.handleFinish() } className="btn btn-primary finish">Finish</button>
          </div>
        );

      } else if (finish === true){
        return (
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p class="mb-0">Approximate Wait Time: </p>
            <h1 class="display-4">15 Min</h1>
          </div>
        )
      } else {
        return sectionIdArr.map((id, i) => {
          if ( i === index ) {
            return <Section key={parseInt(id)} id={parseInt(id)} parags={this.props.state.drupal.paragraphs} />;
          }
        })
      }
    }
  }

  renderFormTitle(index) {
    if (this.props.state.drupal.forms.length > 0) {
      return <h1 className='text-center page-title'>{this.props.state.drupal.forms[index].title}</h1>
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

  handleFormSelect(i) {
    this.setState({
      formIndex: i
    })
  }

  renderFormList() {
    if (this.props.state.drupal.forms.length > 0) {
      return this.props.state.drupal.forms.map((form, i) => {
        return <button key={i + 'key'} onClick={() => this.handleFormSelect(i) } className="btn btn-outline-primary">{form.title}</button>
      })
    }
  }

  handleFinish() {
    this.setState({
      finish: true
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="form-select">
          {this.renderFormList()}
        </div>

        {this.renderFormTitle(this.state.formIndex)}
        {this.renderFormSection(this.state.index, this.state.formIndex, this.state.finish)}
        <button onClick={() => this.handleBack() } className="btn btn-primary">Back</button>
        <button onClick={() => this.handleNext() } className="btn btn-primary">Next</button>
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
