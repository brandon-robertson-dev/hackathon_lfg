const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const mongoStore = require('connect-mongo')
const session = require('express-session')
const exhandle = require('express-handlebars')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.port || 3000

const authRouter = require("./routes/auth_routes")
const pageRouter = require("./routes/page_routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))

const dbConn = 'mongodb://localhost/dndapp'
mongoose.connect(
  dbConn,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  err => {
    if (err) {
      console.log('Error connecting to DND', err)
    } else {
      console.log('Connected to DND')
    }
  }
)

app.use('/users', authRouter)
app.use('/pages', pageRouter)

app.engine('handlebars', exhandle())
app.set('view engine', 'handlebars')

app.listen(port, () => console.log(`It's working on ${port}`))