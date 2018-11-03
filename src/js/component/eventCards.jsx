import React from "react";
import PropTypes from "prop-types";

export function EventCards(props) {
	return (
		<div className="card">
			<div className="card-header">{props.eventDate}</div>
			<div className="card-body">
				<div className="row">
					<div className="col-md-4">{props.eventTime}</div>
					<div className="col-md-8">
						<h5 className="card-title">{props.eventTitle}</h5>
						<p className="card-text">{props.meetup}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

EventCards.propTypes = {
	eventDate: PropTypes.object,
	eventTime: PropTypes.object,
	eventTitle: PropTypes.string,
	meetup: PropTypes.string
};
