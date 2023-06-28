import { RouterProvider } from 'react-router-dom';
import router from './pages/router'
import { useEffect } from 'react';
import header from './header.js';
import axios from 'axios';
import apiUrl from './apiUrl.js';

function App() {

	useEffect(() => {
		let token = localStorage.getItem('token');
		if (token) {
			axios.post(apiUrl + 'auth/token', null, header());
		}
	}, [])

	return (
		<RouterProvider router={router} />
	)
}

export default App
