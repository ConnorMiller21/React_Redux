import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	render() {
		return (
			<div className="jumbotron text-center">
				<h1>Home</h1>
				<hr className='my' />
				<Link to='/about' className='btn btn-primary btn-lg'>Learn More</Link>
			</div>
		);
	}
}

export default HomePage;
