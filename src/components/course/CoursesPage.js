import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

class CoursesPage extends Component {

	courseRow(course, index) {
		return <div key={ index }>{ course.title }</div>;
	}

	render() {
		//debugger; // eslint-disable-line
		const { courses } = this.props;
		return (
			<div>
				<div className="jumbotron text-center">
					<h1>Courses</h1>
					<hr className='my' />
					<Link to='/course' className='btn btn-primary btn-lg'>Add Course</Link>
				</div>
				<CourseList courses={ courses } />
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	//createCourse: PropTypes.func.isRequired
};

// Redux connection related functions

function mapStateToProps(state, ownProps) {
	//debugger; // eslint-disable-line
	return {
		courses: state.courses // Comes from exported function from 'reducers' folder => 'index.js' file
	};
}

function mapDispatchToProps(dispatch) {
	return {
		//createCourse: (course) => dispatch(courseActions.createCourse(course))
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
