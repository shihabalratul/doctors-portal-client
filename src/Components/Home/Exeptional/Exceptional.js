import React from 'react';
import treatment from '../../../images/treatment.png';

const Exceptional = () => {
	return (
		<div style={{ color: "#3A4256" }} className="row ps-4 m-5">
			<div className="col-md-5">
				<img className="img-fluid " src={treatment} alt="" />
			</div>
			<div className="col-md-7 my-5">
				<h1>Exceptional Dental <br /> Care, on Your Terms </h1>
				<p className="lh-large text-secondary mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias iure expedita porro blanditiis eaque dolores vitae mollitia dolor temporibus corporis esse facere consectetur nostrum qui voluptates tempore doloribus, voluptatem beatae facilis quos reprehenderit culpa voluptatum dolorum. Optio eligendi est, inventore ducimus, dolore eveniet asperiores, nihil ratione officiis laudantium aliquam! Necessitatibus reprehenderit accusantium, impedit possimus laborum hic expedita tempore minus deleniti facere cum. Corporis omnis, velit quam voluptatum aliquid perspiciatis repudiandae doloremque molestias veritatis placeat ex natus explicabo. Incidunt ullam adipisci, recusandae laudantium quia porro aspernatur cumque sed aut illum alias cum dignissimos optio natus nostrum sint accusamus vitae quam quis expedita. Similique quod impedit perferendis mollitia aut temporibus tempore modi, odio exercitationem!</p>

				<button className="btn back-gradient px-5 mt-5">Learn More</button>
			</div>
		</div >
	);
};

export default Exceptional;