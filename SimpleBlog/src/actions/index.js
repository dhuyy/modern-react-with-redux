import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'bc17f02b3b0af7b5df90d333aeea109d';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`)

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request
	};
}

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	};
}

export function deletePost(id) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

	return {
		type: DELETE_POST,
		payload: request
	};
}