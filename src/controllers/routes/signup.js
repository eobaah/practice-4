const router = require( 'express' ).Router()

router.get('/', (req, res) => {
  res.status(200).render('pages/signup')
})

module.exports = router
