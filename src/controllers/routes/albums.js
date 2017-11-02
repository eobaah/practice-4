const router = require( 'express' ).Router()
const db = require( '../../models/albums')

router.get('/shits', (req, res) => {
  res.send('test this')

})

router.get('/', (req, res) => {
  db.getAlbums()
   .then( (albums, error)  => {
    if (error) {
      res.status(500).render('error', {error})
    } else {
      res.render('index', {albums})
    }
  })
})

router.get('/albums/:albumID', (req, res) => {
  const albumID = req.params.albumID
  Promise.all([
    db.getAlbumsByID(albumID),
    db.getReviewByAlbumID(albumID)
  ])
   .then( (albumInfo, error)  => {
     const albums = albumInfo[0]
     const reviews = albumInfo[1]
     console.log( "albums:", albums )
     console.log( "reviews:", reviews )
    if (error) {
      res.status(500).render('error', {error})
    } else {
      res.render('review', {albums, reviews})
    }
  })
})



module.exports = router
