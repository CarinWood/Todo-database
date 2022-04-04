import TodoModel from "../models/Todo.model.js";



const createTodo = async (req, res) => {
        const todo =  new TodoModel(
            {
                task: req.body.task,
                name: req.body.name,
                done: req.body.done
                
            })

            try {

                await todo.save()
                const response = await TodoModel.find()
                res.status(201).send(response)

            } catch (error) {
                res.status(500).send({message: error.message})

            }
        
}


const getAllTodos = async (req, res) => {

    try {
    const response = await TodoModel.find()
    res.status(200).send(response)
    } 
    
    catch(error) 
    {
        res.status(500).send({message: error.message})
    }

}

const getCompletedTodos = async (req, res) => {
    try {
        const response = await TodoModel.find({done: true})
        response.length !== 0
        ? res.status(200).send(response)
        : res.status(404).send({message: 'Could not find task any tasks that is completed'})
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}
const getUncompletedTodos = async (req, res) => {
    try {
        const response = await TodoModel.find({done: false})
        response.length !== 0
        ? res.status(200).send(response)
        : res.status(404).send({message: 'Could not find task any tasks that is uncompleted'})
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}


const updateTask = async (req,res) => {
    try {
        await TodoModel.findByIdAndUpdate(req.params.todoId, {
            task: req.body.task
        }, {new: true})
       
        const response = await TodoModel.find()
        res.status(200).send(response)
    } 
    
    catch(error) {
        res.status(500).send({message: error.message})
    }
}

const updateDone = async (req, res) => {
    try {
        await TodoModel.findByIdAndUpdate(req.params.todoId, {
            done: req.body.done
        }, {new: true})
        const response = await TodoModel.find()
        res.status(200).send(response)
    }

    catch(error) {
        res.status(500).send({message: error.message})
    }
}


const deleteTodo = async (req, res) => {
    try {
        await TodoModel.findByIdAndDelete(req.params.todoId)
        const response = await TodoModel.find()
        res.status(201).send(response)

    } catch(error) {
        res.status(500).send({
            message: error.message
        })

    }
}



export default {
    createTodo,
    getAllTodos,
    getCompletedTodos,
    getUncompletedTodos,
    updateTask,
    updateDone,
    deleteTodo
}