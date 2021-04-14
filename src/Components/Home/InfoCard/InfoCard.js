import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Header/Header.css';

const InfoCard = ({ info }) => {
	return (
		<div className="col-md-4">
			<div className={`d-flex back-${info.background} info-container justify-content-center`} >
				<div>
					<FontAwesomeIcon className="infoIcon pe-3" icon={info.icon} />
				</div>
				<div>
					<h5>{info.title}</h5>
					<small>{info.description}</small>
				</div>
			</div>

		</div>
	);
};

export default InfoCard;