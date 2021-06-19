import axios from 'axios'
import * as CONSTS from '../utils/consts'


const profileService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/profile`,
  });

export function UPDATE_PROFILE(body, token) {
    return profileService.put(`/update`, body, {
        headers: {
            authorization: token,
        }
    })
}
