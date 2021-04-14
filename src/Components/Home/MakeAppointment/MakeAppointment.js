import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png';

const MakeAppointment = () => {
	return (
		<div className="make-appointment row">
			<div className="col-md-5">
				<img className="w-100" src={doctor} alt="" />
			</div>
			<div className="col-md-6 appointment-text my-5 py-3">
				<h4 className="my-4">APPOINTMENT</h4>
				<h1>Make an appointment <br /> Today</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rerum ea velit ut temporibus inventore aspernatur ducimus repudiandae voluptatem reiciendis.</p>

				<button className=" my-2 px-5 btn back-gradient">Learn More</button>
			</div>
		</div>
	);
};

export default MakeAppointment;