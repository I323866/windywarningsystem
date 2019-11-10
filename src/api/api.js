import axios from 'axios';

let base = '';

export const requestLogin = params => {
  return axios.post(`${base}/login`, params).then(res => res.data);
};
export const getAWOS1 = params => {
  return axios.get(`http://localhost:3000/api/AWOS`, { params: params });
};
export const getAWOSWarning = params => {
  return axios.get(`http://localhost:3000/api/AWOSWarning`, { params: params });
};
export const updateRemind = (id ,data)  => {
  return axios.put(`http://localhost:3000/api/remind/${id}`, data);
};
export const deleteRemind = id => {
  return axios.delete(`http://localhost:3000/api/remind/${id}`);
};
// export const addUser = params => {
//   return axios.get(`${base}/user/add`, { params: params });
// };
// export const getUserList = params => {
//   return axios.get(`${base}/user/list`, { params: params });
// };
// export const getUserListPage = params => {
//   return axios.get(`${base}/user/listpage`, { params: params });
// };
// export const removeUser = params => {
//   return axios.get(`${base}/user/remove`, { params: params });
// };