import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import './Services.css';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
	const services = [
		{
			name: 'Fluoride Treatment',
			img: fluoride
		},
		{
			name: 'Cavity Filling',
			img: cavity
		},
		{
			name: 'Teeth Whitening',
			img: whitening
		}
	]

	return (
		<section className="services-container">
			<div className="text-center">
				<h5 style={{ color: '#1CC7C1', fontWeight: "bolder" }}>OUR SERVICES</h5>
				<h1>Services we provide</h1>
			</div>
			<div className="row p-5 mt-5 gx-5">
				{
					services.map(service => <ServiceDetails service={service}></ServiceDetails>)
				}
			</div>
		</section>
	);
};

export default Services;