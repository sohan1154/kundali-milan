import axios from 'axios';
import * as GlobalProvider from '../globals/globals';
import * as GlobalConfig from '../globals/config';

axios.defaults.baseURL = GlobalConfig.baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function updateHeaders() {
    let token = GlobalProvider.getToken();
    if (token) {
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    }
}

function readError(error) {
    // console.log('error:::', error)

    let message;
    let errorMsg = error;

    if (typeof errorMsg === 'undefined') {
        message = "Something went wrong, Please try again.";
    }
    else if (typeof errorMsg === 'object') {

        if (typeof errorMsg.message !== 'undefined') {
            message = errorMsg.message;
        }
        else if (typeof errorMsg.error !== 'undefined') {
            message = errorMsg.error;
        }
        else {
            message = "Something went wrong, please try again.";
        }
    }
    else {
        message = errorMsg;
    }

    return message;
}

function readResponse(response) {
    // console.log('response::::', response.data);
    return response.data;
}

// Dashboard 
export const getDashboard = (params) => {
    updateHeaders();
    return axios.get(`/dashboard`, { params: params }).then(response => readResponse(response)).catch(error => { throw readError(error); });
}

// Login 
export const login = (params) => {
    return axios.post(`/login`, params).then(response => readResponse(response)).catch(error => { throw readError(error); });
}

// Settings 
export const getAccountDetail = (id) => {
    updateHeaders();
    return axios.get(`/settings/detail-account/${id}`).then(response => readResponse(response)).catch(error => { throw readError(error); });
}

export const updateAccount = (params) => {
    updateHeaders();
    return axios.post(`/settings/update-account`, params).then(response => readResponse(response)).catch(error => { throw readError(error); });
}

export const changePassword = (params) => {
    updateHeaders();
    return axios.post(`/settings/change-password`, params).then(response => readResponse(response)).catch(error => { throw readError(error); });
}
