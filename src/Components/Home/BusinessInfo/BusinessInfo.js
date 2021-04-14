import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faMapMarkerAlt, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {
	const info = [
		{
			title: 'Opening Hours',
			icon: faClock,
			description: 'We are open 7 days a week.',
			background: 'gradient'
		},
		{
			title: 'Visit Our Location',
			icon: faMapMarkerAlt,
			description: 'Brooklyn, NY-10036, United States',
			background: 'dark'
		},
		{
			title: 'Contact Us Now',
			icon: faPhoneAlt,
			description: '+00 0123 456 789',
			background: 'gradient'
		}
	]

	return (
		<section className="d-flex justify-content-center mt-4 pt-3 ">
			<div className="row w-75 ">
				{
					info.map(info => <InfoCard info={info} />)
				}
			</div>
		</section>
	);
};

export default BusinessInfo;