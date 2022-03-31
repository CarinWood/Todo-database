import http from '../MyApi.js'

const createTodo = (newTodo) => {
    return http.post('/todo', newTodo)
}

const deleteTodo = (id) => {
    return http.delete(`/todo/${id}`)
}

export default {
    createTodo,
    deleteTodo
}