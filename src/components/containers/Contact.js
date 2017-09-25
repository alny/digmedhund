import React, { Component } from 'react'

class Contact extends Component {
  render(){
    return(
      <div className="container-fluid no-left-padding no-right-padding contact-section">

      				<div className="container">

      					<div className="row">
      						<div className="col-md-5 col-sm-6 col-xs-12">
      							<div className="contact-content">
      								<h3>Oplysninger</h3>
      								<p></p>
      								<p><i className="fa fa-phone"></i> <b>Telefon:</b><a href="tel:+0081254798634">+45 23655339</a></p>
      								<p><i className="fa fa-home"></i> <b>Adresse:</b><span>Søbakken 16 b, 2920 Charlottenlund, Danmark</span></p>
      								<p><i className="fa fa-envelope-o"></i> <b>EMAIL:</b><a href="mailto:bgorrissen@gmail.com">bgorrissen@gmail.com</a></p>
      							</div>
      						</div>
      						<div className="col-md-7 col-sm-6 col-xs-12">
      							<div className="contact-form">
      								<h3>Lad os snakke</h3>
      								<form className="row">
      									<div className="col-md-6 form-group">
      										<input type="text" className="form-control" placeholder="Dit navn*" name="contact-name" id="input_name"/>
      									</div>
      									<div className="col-md-6 form-group">
      										<input type="text" className="form-control" placeholder="Din e-mail*" name="contact-email" id="input_email"/>
      									</div>
      									<div className="col-md-12 form-group">
      										<textarea className="form-control" placeholder="Din besked" name="textarea-message" id="textarea_message"></textarea>
      									</div>
      									<div className="col-md-12 form-group">
      										<input type="submit" value="Send Besked" id="btn_submit"/>
      									</div>
      									<div id="alert-msg" className="alert-msg"></div>
      								</form>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
    )
  }
}

export default Contact
