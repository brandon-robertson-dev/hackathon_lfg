const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const mongoStore = require('connect-mongo')
const session = require('express-session')
// const exhandle = require('express-handlebars')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.port || 3000

const app = express()

// app.engine('handlebars', exhandle())
// app.set('view engine', 'handlebars')

app.listen(port, () => console.log(`It's working on ${port}`))