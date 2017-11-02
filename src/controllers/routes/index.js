const router = require( 'express' ).Router()
const albums = require( './albums')
const signup = require('./signup')
const login = require('./login')
const profile = require('./member-profile')

router.use('/signup', signup)
router.use('/login', login)
router.use('/profile', profile)
router.use( '/', albums )

router.get('/logout', (req, res) => {
  req.session.destroy( () => {
    res.redirect('/')
  })
})

module.exports = router
