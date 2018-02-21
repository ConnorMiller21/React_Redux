import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {

	state = {
		course: Object.assign({}, this.props.course),
		errors: {}
	};

	updateCourseState = (evt) => {
		//debugger; //es-lint disable line
		const field = evt.target.name;
		let course = Object.assign({}, this.state.course);
		course[field] = evt.target.value;
		return this.setState({
			course: course
		});
	}

	saveCourse = (evt) => {
		//evt.preventDefault();
		this.props.actions.saveCourse(this.state.course);
	}

	render() {
		return (
			<div>
				<div className="jumbotron text-center">
					<h1>Manage Course</h1>
				</div>
				<CourseForm
					allAuthors={ this.props.authors }
					onChange={ this.updateCourseState }
					onSave={ this.saveCourse }
					course={ this.state.course }
					errors={ this.state.errors }
				/>
			</div>
		);
	}
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function getCourseById(courses, id) {
	const course = courses.filter( (course) => course.id === id);
	if (course.length) {
		return course[0]; // since filter return array you must pass the item that made the array
	}
	return null;
}

function mapStateToProps(state, ownProps) {
	const courseId = ownProps.params.id; // gets the url path '/course:id'

	let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

	if (course.id) {
		course = getCourseById(state.courses, courseId);
	}

	const authorsFormattedForDropdown = state.authors.map(author => {
		return {
			value: author.id,
			text: `${ author.firstName } ${ author.lastName }`
		};
	});

	return {
		course: course,
		authors: authorsFormattedForDropdown
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
