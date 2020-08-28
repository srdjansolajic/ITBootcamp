import axios from 'axios'

export const getAllLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches');
}

export const infoLaunch = () => {
    return axios.get('https://api.spacexdata.com/v3/info');
}

export const pastLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches/past');
}