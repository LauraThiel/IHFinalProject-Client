import axios from 'axios'
import * as CONSTS from '../utils/consts'

const questionService = axios.create({
    baseURL: `${CONSTS.SERVER_URL}/question`
})

export function ADD_QUESTION(body, token) {
    return questionService.post("add", body, {
        headers: {
            authorization: token, 
        }
    })
}