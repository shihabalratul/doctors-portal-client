import React from 'react';

const Reviewcard = ({ review }) => {
	return (
		<div className="col">
			<div className="shadow p-4 bg-white rounded-3 border">
				<p className="w-100 text-secondary">{review.description}</p>
				<div className="d-flex mt-5">
					<img style={{ height: '60px' }} src={review.img} alt="" />
					<div className="mx-2">
						<h5 className="light-color fw-bold">{review.name}</h5>
						<p className="text-secondary">{review.address}</p>
					</div>
				</div>

			</div>

		</div>
	);
};

export default Reviewcard;