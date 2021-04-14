import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '20px',
		border: '0',
		boxShadow: '0 4px 8px 0 grey, 0 6px 20px 0 grey'
	}
};

Modal.setAppElement('#root')

const AppointmentForm = ({ booking, closeModal, modalIsOpen }) => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => {
		closeModal();
		console.log(data)
	};


	return (
		<div>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<div style={{ width: '600px', borderRadius: '30px' }} className="p-5">
					<h2 className="text-center light-color mb-5">{booking.subject}</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="input-group  mb-3">
							<select className="form-control"  {...register("time", { required: true })}>
								<option disabled selected value='' >Gender</option>
								<option value="male">Male</option>
								<option value="Female">Female</option>
								<option value="other">other</option>
							</select>
							{errors.time && <span className='p-2 text-danger'>Please select a time.</span>}

						</div>
						<div className="form-group mb-3">
							<input className="form-control" placeholder="Your Name" {...register("name", { required: true })} />
							{errors.name && <span className='p-2 text-danger'>This field is required</span>}
						</div>
						<div className="form-group  mb-3">
							<input className="form-control" placeholder="Phone Number" {...register("phoneNumber", { required: true })} />
							{errors.phoneNumber && <span className='p-2 text-danger'>This field is required</span>}
						</div>
						<div className="form-group  mb-3">
							<input className="form-control" placeholder="Email"{...register("email", { required: true })} />
							{errors.email && <span className='p-2 text-danger'>This field is required</span>}
						</div>
						<div className="form-group  mb-3">
							<input type='number' className="form-control" placeholder="Age" {...register("age", { required: true })} />
							{errors.age && <span className='p-2 text-danger'>This field is required</span>}
						</div>
						<div className="form-group  mb-3">
							<input type='number' className="form-control" placeholder="Your Weight" {...register("weight", { required: true })} />
							{errors.weight && <span className='p-2 text-danger'>This field is required</span>}
						</div>
						<div className="form-group  mb-3">
							<input className="btn back-gradient d-flex ms-auto px-5" type="submit" />
						</div>

					</form>
				</div>

			</Modal>
		</div >
	);
};

export default AppointmentForm;