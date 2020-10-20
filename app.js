const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const MongoStore = require('connect-mongo')(expressSession)
const cors = require('cors')
const mongoose = require('mongoose')
const exhandle = require('express-handlebars')
const passport = require('passport')

const port = process.env.port || 3000

const app = express()

const userRouter = require("./routes/user_routes")
const postRouter = require('./routes/post_routes')

app.use(express.static("public"))

app.engine('handlebars', exhandle({ defaultLayout: 'main', runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }}))
app.set('view engine', 'handlebars')

// app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser())
app.use(expressSession({
  secret: "djent_god",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

require('./middleware/passport')
app.use(passport.initialize())
app.use(passport.session())

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

app.use('/users', userRouter)
app.use("/posts", postRouter)

app.listen(port, () => console.log(`It's working on ${port}`))