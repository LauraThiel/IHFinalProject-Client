import axios from 'axios'
import * as CONSTS from '../utils/consts'

const singleinterviewService = axios.create({
    baseURL: `${CONSTS.SERVER_URL}/interview/:interviewId`
})

export function UPDATE_SINGLEINTERVIEW(body, token) {
    return singleinterviewService.post("add", body, {
        headers: {
            authorization: token, 
        }
    })
}