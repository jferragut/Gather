const getState = scope => {
	return {
		store: {
			events: [],
			meetups: [],
			session: {}
		},
		actions: {
			findMeetupName: meetupID => {
				let store = scope.state.store;
				if (store.meetups !== []) {
					let meetup = store.meetups.filter((item, index) => {
						if (item.ID == meetupID) {
							return item;
						}
					});
					if (meetup[0] !== undefined) {
						return meetup[0].post_title;
					}
				}
			},
			findEvent: eventID => {
				let store = scope.state.store;
				if (store.events !== []) {
					let event = store.events.filter((item, index) => {
						if (item.ID == eventID) {
							return item;
						}
					});
					if (event[0] !== undefined) {
						return event[0];
					}
				}
			}
		}
	};
};

export default getState;
