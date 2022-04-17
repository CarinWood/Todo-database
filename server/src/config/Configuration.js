import mongoose from 'mongoose'
import dotenv from 'dotenv'

const port = process.env.PORT


dotenv.config()


const connectToDatabase = async () => {
try {
    const DB_URL = process.env.DATABASE_URL
  await  mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  console.log('SUCCESSFULLY CONNECTED TO THE DATABASE')
} catch(error) {
    console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE', error)
    process.exit()
}
}


const connectToPort = (app) => {

    app.listen(port, () => {
        console.log(`SERVER IS RUNNING ON PORT: ${port}`)
    })
}

export default {
    connectToDatabase,
    connectToPort
}