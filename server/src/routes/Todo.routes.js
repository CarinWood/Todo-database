import TodoController from "../controllers/Todo.controller.js";


const routes = (app) => {
    app.post('/todo', TodoController.createTodo)
    app.get('/todo', TodoController.getAllTodos)
    app.put('/done/:todoId', TodoController.updateDone)
    app.get('/uncompleted', TodoController.getUncompletedTodos)
    app.get('/completed', TodoController.getCompletedTodos)
    app.put('/todo/:todoId', TodoController.updateTask)
    app.delete('/todo/:todoId', TodoController.deleteTodo)
   
}

export default {
    routes
}