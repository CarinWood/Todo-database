import http from '../MyApi.js'

const createTodo = (newTodo) => {
    return http.post('/todo', newTodo)
}

const deleteTodo = (id) => {
    return http.delete(`/todo/${id}`)
}

const updateTask = (id, task) => {
    return http.put(`/todo/${id}`, task)
}

const updateDone = (id, object) => {
    return http.put(`/done/${id}`, object)
}

const getUncompleted = () => {
    return http.get('/uncompleted')
}

const getCompleted = () => {
    return http.get('/completed')
}

const getAll = () => {
    return http.get('/todo')
}





export default {
    createTodo,
    deleteTodo,
    updateTask,
    updateDone,
    getUncompleted,
    getCompleted,
    getAll   
}