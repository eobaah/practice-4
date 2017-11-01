const router = require( 'express' ).Router()
const db = require( '../../models/member-profile' )

router.get('/', (req, res) => {
  res.status(200).render('pages/signup', {message:""})
})

router.post('/', (req, res) => {
  const {name, email, password, confirm_password} = req.body
  if( password !== confirm_password ) {
    res.status(200).render('pages/signup', { message: "the passwords do not match"} )
  }
  db.findUser( email )
    .then( oldMember => {
      if( oldMember ) {
        res.status(200).render('pages/signup', { message: "user already exists"} )
      } else {
        db.createUser( name, email, password )
        .then( member => {
          console.log("create a new member=======>", member )
          req.session.user = member
          res.redirect(`/profile/${member[0].id}`)
        })
      }
    })
})

module.exports = router
