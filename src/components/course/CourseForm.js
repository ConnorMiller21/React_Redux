import React from 'react';
import { PropTypes } from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import { Link } from 'react-router-dom';

const CourseForm = ({ course, allAuthors, onSave, onChange, loading, errors }) => {
	return (
		<form>
			<TextInput
				name='title'
				label='Title'
				value={ course.title }
				onChange={ onChange }
				errors={ errors.title }
			/>

			<SelectInput
				name='authorId'
				label='Author'
				value={ course.authorId }
				defaultOption='Select Author'
				options={ allAuthors }
				onChange={ onChange }
				errors={ errors.authorId }
			/>

			<TextInput
				name='category'
				label='Category'
				value={ course.category }
				onChange={ onChange }
				errors={ errors.category }
			/>
			<TextInput
				name='length'
				label='Length'
				value={ course.length }
				onChange={ onChange }
				errors={ errors.length }
			/>

			<Link
				to='/courses'
				disabled={ loading }
				className='btn btn-primary'
				onClick={ onSave }
			>
				{ loading ? 'Saving..' : 'Save' }
			</Link>
		</form>
	);
};

CourseForm.propTypes = {
	course: PropTypes.object.isRequired,
	allAuthors: PropTypes.array,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	errors: PropTypes.object
};

export default CourseForm;
