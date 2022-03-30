import TodoController from "../controllers/Todo.controller.js";

const routes = (app) => {
    app.post('/todo', TodoController.createTodo)
    app.get('/todo', TodoController.getAllTodos)
    app.get('/todo/:todoId', TodoController.getTodoById)
    app.get('/searchname/', TodoController.getTodoByNameQuery)
    app.get('/done', TodoController.getCompletedTodos)
    app.get('/uncompleted', TodoController.getUncompletedTodos)
    app.put('/todo/:todoId', TodoController.updateTask)
    app.delete('/todo/:todoId', TodoController.deleteTodo)
}

export default {
    routes
}