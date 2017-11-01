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

  db.getAlbumsByID(albumID)
    .then( (albums , error) => {
    if (error) {
      res.status(500).render('error', {error})
    } else {
      const album = albums[0]
      res.render('pages/album', {album})
    }
  })
})

module.exports = router
