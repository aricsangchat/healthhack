const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/forms', (req, res) => {
  axios.get('http://patient-form-builder.dd:8083/forms-api?_format=json')
  .then(function (response) {
    console.log(response.data);
    res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

})

router.get('/paragraphs', (req, res) => {
  axios.get('http://patient-form-builder.dd:8083/paragraphs-api?_format=json')
  .then(function (response) {
    console.log(response.data);
    res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})

module.exports = router
