import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter>
			<Route path='/' component={ App } />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
