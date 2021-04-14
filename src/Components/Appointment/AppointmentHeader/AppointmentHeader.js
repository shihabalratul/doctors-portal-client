import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './Sample.less';
import { Link } from 'react-router-dom';
import './AppointmentHeader.css';
import chair from '../../../images/chair.png';

const AppointmentHeader = ({ handleDateChange }) => {

	return (
		<main style={{ height: '600px' }} className="row d-flex align-items-center appointment-header">
			<div className="col-md-4 offset-md-1">
				<h1>APPOINTMENT</h1>
				<div >
					<Calendar
						className="border-0 mt-5 shadow p-3 rounded-3"
						onChange={handleDateChange}
						value={new Date()}
					/>
				</div>
			</div>
			<div className="col-md-6">
				<img src={chair} alt="" className="img-fluid" />
			</div>
		</main>
	);
};

export default AppointmentHeader;