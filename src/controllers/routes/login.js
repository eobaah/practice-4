const router = require( 'express' ).Router()
const db = require( '../../models/member-profile' )

router.get('/', (req, res) => {
  res.status(200).render('pages/login', {message:""})
})


router.post('/', (req, res) => {
  const {email, password} = req.body
  db.findUser( email )
    .then( oldMember => {
      if( !oldMember ) {
        res.status(200).render('pages/login', { message: "please check your login details"} )
      } else {
        if( oldMember.password === password ) {
          req.session.user = oldMember
          res.status(200).redirect( `/profile/${oldMember.id}` )
        }
      }
    })
})



module.exports = router
