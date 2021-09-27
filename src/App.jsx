import React from 'react';

import Calendar from './components/Calendar';
import Background from './components/Background/Background';
import Form from './components/Form/Form';
import Journal from './components/Journal/Journal';

export default class App extends React.Component {

	render() {
		return (
			<div>
				<Calendar onChange={this.handleDateChange}/>
				<Background/>
				{/* <Form/> */}
			</div>
		);
	}
}