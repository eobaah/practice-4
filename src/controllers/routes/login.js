const router = require( 'express' ).Router()

router.get('/', (req, res) => {
  res.status(200).render('pages/login')
})




module.exports = router
