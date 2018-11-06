import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Moment from "react-moment";

export class EventDetail extends React.Component {
	render() {
		let parseMoment = (data, format) => {
			if (format == "date") {
				return <Moment format="MM/DD/YYYY">{data}</Moment>;
			}
			if (format == "time") {
				let timeArr = data.split(":");
				let theTime = String(timeArr[0]) + ":" + String(timeArr[1]);
				return theTime;
			}
		};

		return (
			<div className="text-center">
				<Context.Consumer>
					{({ store, actions }) => {
						let eventID = this.props.match.params.theid;
						let eventObject = actions.findEvent(eventID);
						let meetupName = actions.findMeetupName(
							eventObject.meta_keys._meetup
						);
						return (
							<div className="wrapper">
								<div className="jumbotron jumbotron-fluid bg-dark text-white">
									<div className="row">
										<div className="col-9">
											{parseMoment(
												eventObject.meta_keys.day,
												"date"
											)}
											<br />
											{eventObject.post_title}
											<br />
											{meetupName}
										</div>

										<div className="col-3">
											<div className="rsvp">
												people going
												<br />
												<button>Login to RSVP</button>
												<br />
												Social Icons
											</div>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-9" />

										<div className="col-3">
											<div className="dataInfo" />
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

EventDetail.propTypes = {
	match: PropTypes.object
};
