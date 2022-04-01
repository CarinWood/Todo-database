import TodoController from "../controllers/Todo.controller.js";
import AliveController from '../controllers/Alive.controller.js'

const routes = (app) => {
    app.post('/todo', TodoController.createTodo)
    app.get('/todo', TodoController.getAllTodos)
    app.get('/todo/:todoId', TodoController.getTodoById)
    app.get('/searchname/', TodoController.getTodoByNameQuery)
    app.put('/done/:todoId', TodoController.updateDone)
    app.get('/uncompleted', TodoController.getUncompletedTodos)
    app.put('/todo/:todoId', TodoController.updateTask)
    app.delete('/todo/:todoId', TodoController.deleteTodo)
    app.get('/', AliveController.apiAlive)
}

export default {
    routes
}