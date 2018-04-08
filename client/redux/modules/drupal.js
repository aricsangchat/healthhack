import axios from 'axios'
import { displayFlashMessage } from './flashMessage'

const DEFAULT_STATE = {
  forms: [],
  paragraphs: []
}

// ******* Action Types *******

const SET_FORMS = 'SET_FORMS'
const SET_PARAGRAPHS= 'SET_PARAGRAPHS'
// ******* Action Creators & Reducers *******
export function getForms () {
  return dispatch => {
    return axios.get(`http://localhost:4000/api/drupal/forms`).then(forms => {
      dispatch(getFormsSuccess(forms.data))
    })
  }
}

export function getFormsSuccess (data) {
  return { type: SET_FORMS, data }
}
function setFormsReducer (state, action) {
  return Object.assign({}, state, { forms: action.data })
}

export function getParagraphs () {
  return dispatch => {
    return axios.get(`http://localhost:4000/api/drupal/paragraphs`).then(forms => {
      dispatch(getParagraphsSuccess(forms.data))
    })
  }
}

export function getParagraphsSuccess (data) {
  return { type: SET_PARAGRAPHS, data }
}
function setParagraphsReducer (state, action) {
  return Object.assign({}, state, { paragraphs: action.data })
}

export default function user (state = DEFAULT_STATE, action) {
  switch (action.type) {
  case SET_FORMS:
    return setFormsReducer(state, action)
  case SET_PARAGRAPHS:
    return setParagraphsReducer(state, action)
  default:
    return state
  }
}
