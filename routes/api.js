var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
var helper = require('sendgrid').mail;


router.get('/sendmail', function(req, res, next){

  var from_email = new helper.Email('dbthechain@gmail.com');
  var to_email = new helper.Email('foxyhorse@gmail.com');
  var subject = 'Hello World from the SendGrid Node.js Library!';
  var content = new helper.Content('text/html', 'Hello, Email!');
  var mail = new helper.Mail(from_email, subject, to_email, content);

  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, function(error, response) {
    if(error){
      res.json({
        confirmation: 'Failed',
        message: error
      })
      return
    } else {
      res.json({
        confirmation: 'success',
        message: response
      })
    }
  });

});

router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource

  var controller = controllers[resource]

  if(controller == null){
    res.send({
      confirmation: 'Fail',
      message: 'Invalid resource'
    })
    return
  }

  controller
  .get(req.query)
  .then(function(results){
    res.send({
      confirmation: 'success',
      results: results
    })
  })
  .catch(function(err){
    res.send({
      confirmation: 'Fail',
      message: err
    })
  })

});

router.get('/:resource/:id', function(req, res, next) {
  var resource = req.params.resource

  var controller = controllers[resource]

  if(controller == null){
    res.send({
      confirmation: 'Fail',
      message: 'Invalid resource'
    })
    return
  }
  var id = req.params.id

  controller
  .getById(id)
  .then(function(result){
    res.send({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.send({
      confirmation: 'Fail',
      message: err.message
    })
  })

});

router.post('/:resource', function(req, res, next) {
  var resource = req.params.resource
  var controller = controllers[resource]

  if(controller == null){
    res.send({
      confirmation: 'Fail',
      message: 'Invalid resource'
    })
    return
  }

  controller
  .create(req.body)
  .then(function(result){
    res.send({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.send({
      confirmation: 'Fail',
      message: err.message
    })
  })

});




module.exports = router;
