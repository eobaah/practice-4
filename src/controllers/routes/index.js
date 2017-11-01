const router = require( 'express' ).Router()
const albums = require( './albums')
const signup = require('./signup')
const login = require('./login')

router.use('/signup', signup)
router.use('/login', login)
router.use( '/', albums )

module.exports = router
