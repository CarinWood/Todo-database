import http from '../MyApi.js'

const alive = () => {
    return http.get('/')
}

export default {
    alive
}