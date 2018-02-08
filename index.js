const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const CookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI)

const app = express()


app.use(bodyParser.json())
app.use(
    CookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // how long cookie exist before it expires.
        keys: [keys.cookieKey]
    })
)

// app.get('/', (req, res) => {
//         res.send("yes")
//     }
// )


app.use(passport.initialize())
app.use(passport.session())



require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);