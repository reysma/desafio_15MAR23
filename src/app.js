import express from 'express'
import { addLogger } from './utils/logger.js'

const app = express()

app.use(addLogger)




app.get('/', (req, res) => {
    req.logger.debug("Debug Test");
    req.logger.info("Info Test");
    req.logger.http("Http Test");
    req.logger.warning("Warning Test");
    req.logger.error("Error Test");
    req.logger.fatal("Fatal Error Test");

    res.send({message: 'Logger testing!!'})
})

app.listen(8080)
