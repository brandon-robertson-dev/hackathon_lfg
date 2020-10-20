const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const MongoStore = require('connect-mongo')(expressSession)
// const cors = require('cors')
const mongoose = require('mongoose')
const exhandle = require('express-handlebars')
const passport = require('passport')
const multer = require('multer')
const path = require('path')
const User = require('./models/user')

const port = process.env.port || 3000

const app = express()

const storage = multer.diskStorage({
  destination: './files/',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
}).single('profile_picture')

const userRouter = require("./routes/user_routes")
const postRouter = require('./routes/post_routes')
const user = require('./models/user')

app.use(express.static("public"))

app.engine('handlebars', exhandle({ defaultLayout: 'main', runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }}))
app.set('view engine', 'handlebars')

// app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
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
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if(err){
      console.log(err)
    } else {
      console.log(req.user)
      let user = req.user
      user.profile_picture = req.file.path
      console.log(user)
      const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true })
      res.redirect('users/' + updatedUser._id)
    }
  })
})

app.listen(port, () => console.log(`It's working on ${port}`))

module.exports = {
  upload,
}