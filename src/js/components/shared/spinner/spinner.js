import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import './spinner.css';

const Spinner = ({ text }) => {
	return (
		<div className="container centered">
			<div className="row loading-row">
				<div className={`col-md-4 col-md-offset-4 loading`}>
					<ReactLoading
						type="spinningBubbles"
						delay={0}
						height="100%"
						width="100%"
					/>
				</div>
			</div>
			<h3 className={`loading-text`}>{text}</h3>
		</div>
	);
};

export default Spinner;

Spinner.propTypes = {
	textType: PropTypes.string,
};
