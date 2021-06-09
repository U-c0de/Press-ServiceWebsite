import React from 'react';
import emailjs from 'emailjs-com'
import '../App.css';
import './Contact.css';

function Contact() {
	function sendEmail(e){
		e.preventDefault();

    emailjs.sendForm('Service_ID', 'Template_ID', e.target, 'USER_ID(API user ID)')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	  e.target.reset()
	}
  return (	
    <>
    <div class="container-fluid">
	<form onSubmit={sendEmail}>
	<div class="row">
			<h1><b>Message for Queries</b></h1>
			<h3 align="center"><b>* * * * *</b></h3>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" className="form-control" placeholder="Name" name="name" />
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="email" className="form-control" placeholder="Email Address" name="email" />
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide" >
					<input type="text" className="form-control" placeholder="Phone Number" name="phonenumber" /> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide" >
					<textarea className="form-control" placeholder="Message" name="message" /> 
				</div>
			</div>
			<div class="col-xs-12">
				<input type="submit" className="btn-lrg submit-btn" value="Send Message"/>
			</div>
	</div>
	</form>
</div>
</>
  );
}

export default Contact;
