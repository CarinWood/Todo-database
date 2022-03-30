import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema(
    {
        task: String,
        name: String,
        done: Boolean
      

    }, {timestamps: true}
)

const TodoModel = mongoose.model('todo', TodoSchema)

export default TodoModel