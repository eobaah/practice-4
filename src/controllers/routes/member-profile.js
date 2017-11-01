const router = require( 'express' ).Router()
const db = require( '../../models/member-profile' )

router.get('/:memberID', (req, res) => {
  const memberID = req.params.memberID
  res.status(200).render("pages/profile", {message:"", memberID})
})

module.exports = router
