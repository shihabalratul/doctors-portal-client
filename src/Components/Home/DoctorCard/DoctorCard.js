import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DoctorCard = ({ doctor }) => {
	return (
		<div className='col'>
			<div className="d-flex justify-content-center">
				<img className="img-fluid w-50" src={doctor.img} alt="" />
			</div>
			<div className="text-center my-2">
				<h3>{doctor.name}</h3>
				<p><FontAwesomeIcon className="light-color" icon={faPhoneAlt} /> {doctor.phone}</p>
			</div>
		</div>
	);
};

export default DoctorCard;