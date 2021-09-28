import React from 'react';

import Calendar from './components/Calendar';
import Background from './components/Background/Background';

export default class App extends React.Component {

	render() {
		return (
			<div>
				{/* <Calendar onChange={this.handleDateChange}/> */}
				<Background/>
			</div>
		);
	}
}