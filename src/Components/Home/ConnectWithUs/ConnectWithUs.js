import React from 'react';
import './ConnectWithUs.css';

const ConnectWithUs = () => {
	return (
		<section className="connect d-flex align-items-center text-center">
			<div className="w-50 mx-auto">
				<div className="mb-5 py-5 ">
					<h4 className="light-color">CONTACT US</h4>
					<h1 className="fs-1">Always Connect With Us</h1>
				</div>
				<form action="">
					<input className="form-control mt-4 form-control-lg" id="" type="text" name="" placeholder="Email Address*" />
					<input className="form-control mt-4 form-control-lg" type="text" name="" id="" placeholder="Subject*" />
					<textarea className="form-control mt-4 form-control-lg" id="" rows="6" placeholder="Your Message*"></textarea>
					<button className="btn back-gradient px-5 mt-4" type="submit">SUBMIT</button>
				</form>
			</div>
		</section>
	);
};

export default ConnectWithUs;