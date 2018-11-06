import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function EventCards(props) {
	return (
		<div className="card" style={{ margin: "1rem auto", width: "40%" }}>
			<div className="card-header">{props.eventDate}</div>
			<div className="card-body">
				<div className="row">
					<div className="col-md-4">{props.eventTime}</div>
					<div className="col-md-8">
						<Link to={"/events/" + props.eventID}>
							<h5 className="card-title">{props.eventTitle}</h5>
						</Link>
						<p className="card-text">{props.meetup}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

EventCards.propTypes = {
	eventDate: PropTypes.object,
	eventTime: PropTypes.string,
	eventTitle: PropTypes.string,
	meetup: PropTypes.string,
	meetupID: PropTypes.string,
	eventID: PropTypes.number
};
