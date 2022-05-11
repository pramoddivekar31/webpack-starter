const morgan = require('morgan')

const logger = morgan('Method :method URL :url Status :status - Time taken :response-time ms')

module.exports = logger