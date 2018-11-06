import React from "react";
import { Context } from "../store/appContext.jsx";
import { EventCards } from "../component/eventCards.jsx";
import Moment from "react-moment";

import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		let parseMoment = (data, format) => {
			if (format == "date") {
				return <Moment format="MM/DD/YYYY">{data}</Moment>;
			}
			if (format == "time") {
				return (
					<Moment format="LT" parse="HH:mm:ss">
						{data}
					</Moment>
				);
			}
		};

		return (
			<div className="text-center">
				<div className="jumbotron jumbotron-fluid text-center bg-dark text-white">
					<h1>Gather</h1>
					<h3>Where friends meet to do stuff</h3>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						return store.events.map(event => {
							if (event) {
								return (
									<EventCards
										eventDate={parseMoment(
											event.meta_keys.day,
											"date"
										)}
										eventTime={parseMoment(
											event.meta_keys.time,
											"time"
										)}
										eventTitle={event.post_title}
										meetup={actions.findMeetupName(
											event.meta_keys._meetup
										)}
										meetupID={event.meta_keys._meetup}
										eventID={event.ID}
										key={event.ID}
									/>
								);
							} else {
								return <h5>Loading...</h5>;
							}
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
