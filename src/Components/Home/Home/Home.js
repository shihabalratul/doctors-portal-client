import React from 'react';
import Blog from '../Blog/Blog';
import ConnectWithUs from '../ConnectWithUs/ConnectWithUs';
import Doctors from '../Doctors/Doctors';
import Exceptional from '../Exeptional/Exceptional';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
	return (
		<div>
			<Header />
			<Services />
			<Exceptional />
			<MakeAppointment />
			<Testimonial />
			<Blog />
			<Doctors />
			<ConnectWithUs />
			<Footer />
		</div>
	);
};

export default Home;