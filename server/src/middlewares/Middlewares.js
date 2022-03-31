import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config()

const options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}

const apply = (app) => {
    app.use(cors(options))
  
}




const notFound = (req, res, next) => {
    const error = new Error (`Not found: ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (error, req, res, next) => {
    const statuscode = res.statuscode === 200 ? 500 : res.statusCode
    res.status(statuscode)
    res.json({
        statuscode: statuscode,
        message: error.message,
        stacktrace: process.env.ENVIRONMENT === 'PRODUCTION' ? 'not showing':  error.stack,
    })
}

export default {
    notFound,
    errorHandler,
    apply
}
