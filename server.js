require('dotenv').config()
const app = require('./app')
const connectDB = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config')

let initApp = async (appConfig, dbConfig) =>{
    try {
        await connectDB(dbConfig)
        app.listen(appConfig.port, ()=>console.log(`service on port ${appConfig.port}`))    
    } catch (err) {
        console.log(err)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)

