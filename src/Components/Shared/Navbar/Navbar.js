import React from 'react';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light ms-auto">
				<div className="container-fluid">
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link me-5 active" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link me-5" href="#">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link me-5" href="#">Dental Service</a>
							</li>
							<li className="nav-item">
								<a className="nav-link me-5 text-white" href="#">Reviews</a>
							</li>
							<li className="nav-item">
								<a className="nav-link me-5 text-white" href="#">Blogs</a>
							</li>
							<li className="nav-item">
								<a className="nav-link me-5 text-white" href="#">Contact Us</a>
							</li>

						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;