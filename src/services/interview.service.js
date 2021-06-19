import axios from 'axios'
import * as CONSTS from '../utils/consts'

const interviewService = axios.create({
    baseURL: `${CONSTS.SERVER_URL}/movies`
})

export function ADD_INTERVIEW(body, token) {
    return interviewService.post("add", body, {
        headers: {
            authorization: token, 
        }
    })
}