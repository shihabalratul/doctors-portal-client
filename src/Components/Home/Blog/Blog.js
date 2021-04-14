import React from 'react';
import arrow from '../../../images/arrow.svg';
import BlogCard from '../BlogCard/BlogCard';
import './Blog.css';
import user1 from '../../../images/user1.png';
import user2 from '../../../images/user2.png';


const Blog = () => {
	const blogs = [
		{
			name: 'Wilson Harry',
			img: user1,
			date: '23 April 2021',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam tempore, iste accusantium optio modi assumenda rerum dignissimos iusto perferendis, voluptatem aliquid voluptate pariatur commodi quam consequatur voluptatum natus ab, minima autem debitis laboriosam illum sunt magni.'
		},
		{
			name: 'Wilson Harry',
			img: user2,
			date: '23 April 2021',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam tempore, iste accusantium optio modi assumenda rerum dignissimos iusto perferendis, voluptatem aliquid voluptate pariatur commodi quam consequatur voluptatum natus ab, minima autem debitis laboriosam illum sunt magni.'
		}
	]
	return (
		<section className="m-5 py-5">
			<div className="text-center my-5 py-5">
				<h4 className="light-color">OUR BLOG</h4>
				<h1 className="dark-color">From Our Blog News</h1>
			</div>
			<div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
				<div className="col">
					<div className="shadow p-4 back-gradient rounded-3 border h-100 d-flex align-items-center">
						<div className="quote">
							<h3>Check at least a doctor in a <br /> year for your teeth </h3>
							<img className="mt-5 " src={arrow} alt="" />
						</div>
					</div>

				</div>
				{
					blogs.map(blog => <BlogCard blog={blog} />)
				}
			</div>
		</section >
	);
};

export default Blog;