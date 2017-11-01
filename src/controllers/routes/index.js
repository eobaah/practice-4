const router = require( 'express' ).Router()
const albums = require( './albums')
const signup = require('./signup')
const login = require('./login')
const profile = require('./member-profile')

router.use('/signup', signup)
router.use('/login', login)
router.use('/profile', profile)
router.use( '/', albums )

module.exports = router
