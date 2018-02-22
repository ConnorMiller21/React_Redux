import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<Header loading={ this.props.loading } />
				<Route exact path='/' component={ HomePage } />
				<Route path='/about' component={ AboutPage } />
				<Route path='/courses' component={ CoursesPage } />
				<Route exact path='/course' component={ ManageCoursePage } />
				<Route path='/course/:id' component={ ManageCoursePage } />
			</div>
		);
	}
}

App.propTypes = {
	loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		loading: state.ajaxCallsInProgress > 0
	};
}

export default connect(mapStateToProps)(App);
