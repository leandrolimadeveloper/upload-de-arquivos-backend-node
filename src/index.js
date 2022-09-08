require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose')

/**
 * Database settings
 */
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected')
        app.emit('Done')
    })
    .catch(err => console.log(err))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.use(require('./routes'))

app.on('Done', () => {
    const port = 3333

    app.listen(process.env.PORT || port, () => {
        console.log(`Server running at: http://localhost:${port}`)
    })
})
