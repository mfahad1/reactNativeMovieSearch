import {ApiUrl} from '../constants';
const header = {
	'Accept': 'application/json',
}
const headers = {
	method:'GET',
	headers:header
}
export const getReq = (url)=>{
	console.log("checking url",ApiUrl+url);
	return fetch(ApiUrl+url,headers)
	.then((response)=> {
		return response.json();
	})
	.catch((ex)=> {
		console.log('parsing failed', ex)
			return ex;
	})
}