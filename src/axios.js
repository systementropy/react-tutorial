import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://jsonplaceholder.typicode.com/'
})
instance.defaults.headers.common['Authorization'] = 'Instance auth token';
instance.interceptors.request.use(requestConfig => {
	console.log(requestConfig);
	// Edit requestConfig
	return requestConfig
}, error => {
	console.log(error);
	return Promise.reject(error)
})
export default instance