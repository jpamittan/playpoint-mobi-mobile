import axios from "axios";
const baseURL = "http://192.168.1.8:8000/api";

export function _fetch (path) {
	return axios.get(`${baseURL}/${path}`)
	.then(response => response.data);
}

export function _post (path, req) {
	return axios.post(`${baseURL}/${path}`, req)
	.then(response => response.data);
}

export function fetchData (path) {
	return _fetch(`${path}`);
}

export function postData (path, req) {
	return _post(`${path}`, req);
}