import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			// Set your fetchs/Ajax requests here.
			// make sure you're using the store: this.state.store

			// Fetch events
			fetch("https://assets.breatheco.de/apis/fake/meetup/events")
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						let store = this.state.store;
						store.events = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});

			// Fetch meetups
			fetch("https://assets.breatheco.de/apis/fake/meetup/meetups")
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						let store = this.state.store;
						store.meetups = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});

			// Fetch session
			fetch("https://assets.breatheco.de/apis/fake/meetup/session")
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						let store = this.state.store;
						store.session = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
