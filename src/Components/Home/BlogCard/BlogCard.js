import React from 'react';

const BlogCard = ({ blog }) => {
	return (
		<div className="col">
			<div className="shadow p-4 bg-white rounded-3 border pb-5">
				<div className="d-flex my-5">
					<img style={{ height: '60px' }} src={blog.img} alt="" />
					<div className="mx-2">
						<h5 className="light-color fw-bold">{blog.name}</h5>
						<p className="text-secondary">{blog.date}</p>
					</div>
				</div>
				<p className="w-100 text-secondary">{blog.description}</p>


			</div>

		</div>
	);
};

export default BlogCard;