const router = require( 'express' ).Router()
const db = require( '../../models/member-profile' )
const {hash_compare} = require( '../../authentication' )

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
        hash_compare(password, oldMember.password)
          .then( validPassword => {
            console.log(validPassword)
            if( validPassword ) {
              req.session.user = oldMember
              res.status(200).redirect( `/profile/${oldMember.id}` )
            } else {
              res.status(200).render('pages/login', { message: "Error: please try again"} )
            }
          })
      }
    })
})



module.exports = router
