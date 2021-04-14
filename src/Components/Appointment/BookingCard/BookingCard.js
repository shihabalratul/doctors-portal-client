import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className="col">
			<div className="p-4 bg-white shadow rounded-3 ">
				<h4 className="light-color">{booking.subject}</h4>
				<h5 className="dark-color">{booking.visitingHour}</h5>
				<small className="text-secondary">{booking.totalSpace} SPACES AVAILABLE</small>
				<br />
				<button onClick={openModal} className="btn back-gradient m-3">BOOK APPOINTMENT</button>
				<AppointmentForm booking={booking} closeModal={closeModal} modalIsOpen={modalIsOpen} />
			</div>
		</div>
	);
};

export default BookingCard;