import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
	return (
		<main style={{ height: '600px' }} className="row d-flex align-items-center">
			<div className="col-md-4 offset-md-1">
				<h1 className="m-3 py-2">Your New Smile <br /> Starts Here</h1>
				<p className="light-text m-3 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis mollitia, ab nesciunt exercitationem itaque!</p>
				<Link to='/appointment' className="btn back-gradient m-3 py-2">GET APPOINTMENT</Link>
			</div>
			<div className="col-md-6">
				<img src={chair} alt="" className="img-fluid" />
			</div>
		</main>
	);
};

export default HeaderMain;