import axios from 'axios';
const BASEURL = "https://entertainment.mypacks.com/api";
const DEFAULT_API_KEY = "377cedc0-be19-436d-85a9-bf7698863bc8";
const DEFAULT_API_SECRET = "w6Pzi4ZOmpy6bWRF91ztbuDNf4Z9xMy55lueI3X9b";
const HEADER = {
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": DEFAULT_API_KEY,
    "Secret": DEFAULT_API_SECRET
  }
}

export function _fetch (path) {
	return axios.get(`${BASEURL}/${path}`, HEADER)
	.then(response => {
		return response.data.result;
	});
}

export function _post (path, req) {
	return axios.post(`${BASEURL}/${path}`, req, HEADER)
	.then(response => {
		return response.data.result;
	});
}

export function fetchData (path) {
	return _fetch(`${path}`);
}

export function postData (path, req) {
	return _post(`${path}`, req);
}