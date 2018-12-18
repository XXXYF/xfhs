//定义axios的API
import axios from 'axios';

let base = '';
//let base = 'localhost:8080/hblw_nb/user/doLogin.do';
//发送 post 请求，第一个参数起索引作用，第二个参数是待处理数据，这里用了箭头函数做定义
 //then 中的 res 是 Promise 对象
export const requestLogin = params => {
	return axios.post(`${base}/AdminCommon`, params).then(
		res => res.data);
};
export const getMsglist = params => {
	return axios.get(`${base}/msg/list`,params).then(
		res => res.data);
};
export const getUserList = params => {
	return axios.get(`${base}/user/list`, { params: params });
};

export const getUserListPage = params => {
	return axios.get(`${base}/AdminCommon`, { params: params });
};

export const removeUser = params => {
	return axios.get(`${base}/user/remove`, { params: params });
};

export const batchRemoveUser = params => {
	return axios.get(`${base}/user/batchremove`, { params: params });
};

export const editUser = params => { return axios.get(`${base}/user/edit`, {
	params: params });
};

export const addUser = params => {
	return axios.get(`${base}/user/add`, { params: params });
};

