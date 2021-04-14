import React from 'react';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import user1 from '../../../images/user1.png';
import user2 from '../../../images/user2.png';
import user3 from '../../../images/user3.png';
import Reviewcard from '../Reviewcard/Reviewcard';


const Testimonial = () => {
	const reviews = [
		{
			name: 'Wilson Harry',
			img: user1,
			address: 'California',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam tempore, iste accusantium optio modi assumenda rerum dignissimos iusto perferendis, voluptatem aliquid voluptate pariatur commodi quam consequatur voluptatum natus ab, minima autem debitis laboriosam illum sunt magni.'
		},
		{
			name: 'Wilson Harry',
			img: user2,
			address: 'California',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam tempore, iste accusantium optio modi assumenda rerum dignissimos iusto perferendis, voluptatem aliquid voluptate pariatur commodi quam consequatur voluptatum natus ab, minima autem debitis laboriosam illum sunt magni.'
		},
		{
			name: 'Wilson Harry',
			img: user3,
			address: 'California',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam tempore, iste accusantium optio modi assumenda rerum dignissimos iusto perferendis, voluptatem aliquid voluptate pariatur commodi quam consequatur voluptatum natus ab, minima autem debitis laboriosam illum sunt magni.'
		}
	]
	return (
		<section className="m-5 py-5 testimonial ">
			<div className="quote">
				<h5 className="light-color">TESTIMONIAL</h5>
				<h1 className="dark-color">What's Our Patients <br /> Says</h1>
			</div>

			<div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
				{
					reviews.map(review => <Reviewcard review={review}></Reviewcard>)
				}
			</div>



		</section >
	);
};

export default Testimonial;