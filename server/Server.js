import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import middlewares from './src/middlewares/Middlewares.js'
import Configuration from './config/Configuration.js'
import TodoRoutes from './src/routes/Todo.routes.js'



const app = express()
dotenv.config()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('API is Alive!')
} )

TodoRoutes.routes(app)
app.use(helmet())
app.use(morgan('common'))


app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)





export default app




