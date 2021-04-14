import React from 'react';

const ServiceDetails = ({ service }) => {
	return (
		<div className="col-md-4 text-center px-5" >
			<img style={{ height: '80px', margin: '20px 0' }} src={service.img} alt="" />
			<h5 className="my-3">{service.name}</h5>
			<p className="text-secondary" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo iste eligendi deleniti?</p>
		</div>
	);
};

export default ServiceDetails;