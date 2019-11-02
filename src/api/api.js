import axios from 'axios';

let base = '';

export const requestLogin = params => {
  return axios.post(`${base}/login`, params).then(res => res.data);
};

// export const getUserList = params => {
//   return axios.get(`${base}/user/list`, { params: params });
// };

export const getAWOS1 = params => {
  return axios.get(`http://localhost:3000/api/AWOS`, { params: params });
};
export const getAWOSWarning = params => {
  return axios.get(`http://localhost:3000/api/AWOSWarning`, { params: params });
};
// export const getUserListPage = params => {
//   return axios.get(`${base}/user/listpage`, { params: params });
// };
// export const removeUser = params => {
//   return axios.get(`${base}/user/remove`, { params: params });
// };  
export const editMessage = params => {
  return axios.put(`http://localhost:3000/api/AWOSWarning`, { params: params });
};

// export const editUser = params => {
//   return axios.get(`${base}/user/edit`, { params: params });
// };

// export const addUser = params => {
//   return axios.get(`${base}/user/add`, { params: params });
// };
