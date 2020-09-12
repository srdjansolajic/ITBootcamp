import axios from 'axios'

export const getCompanyInfo = () => {
    return axios.get('https://api.spacexdata.com/v3/info');
}

export const getPastLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches/past')
}

export const getAllLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches')
}