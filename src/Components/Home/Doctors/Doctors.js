import React from 'react';
import doctor1 from '../../../images/doctor1.png';
import DoctorCard from '../DoctorCard/DoctorCard';

const Doctors = () => {
	const doctors = [
		{
			name: 'Dr.Caudi',
			img: doctor1,
			phone: '+00 012 345 678'
		},
		{
			name: 'Dr.Caudi',
			img: doctor1,
			phone: '+00 012 345 678'
		},
		{
			name: 'Dr.Caudi',
			img: doctor1,
			phone: '+00 012 345 678'
		},

	]

	return (
		<section className="m-5 px-3">
			<h4 className="light-color text-center fw-bold">OUR DOCTORS</h4>
			<div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
				{
					doctors.map(doctor => <DoctorCard doctor={doctor} />)
				}
			</div>
		</section>
	);
};

export default Doctors;