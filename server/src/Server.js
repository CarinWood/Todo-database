import express from 'express'
import middlewares from './middlewares/Middlewares.js'
import Configuration from './config/Configuration.js'
import TodoRoutes from './routes/Todo.routes.js'

const app = express()

middlewares.apply(app)
TodoRoutes.routes(app)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)


Configuration.connectToDatabase()
Configuration.connectToPort(app)





export default app




