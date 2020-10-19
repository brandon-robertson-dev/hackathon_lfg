const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const exhandle = require('express-handlebars')

const port = process.env.port || 3000

const app = express()

const pageRouter = require("./routes/page_routes")
const userRouter = require("./routes/user_routes")
const authRouter = require("./routes/auth_routes")

app.use(express.static("public"))

app.engine('handlebars', exhandle({ defaultLayout: 'main', runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }}))
app.set('view engine', 'handlebars')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

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

app.use('/pages', pageRouter)
app.use("/users", userRouter)
app.use('/users', authRouter)

app.listen(port, () => console.log(`It's working on ${port}`))