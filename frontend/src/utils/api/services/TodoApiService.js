import http from '../MyApi.js'

const createTodo = (newTodo) => {
    return http.post('/todo', newTodo)
}

export default {
    createTodo
}