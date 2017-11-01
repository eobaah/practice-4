const db = require( './db/albums')

module.exports = {
  getAlbums: db.getAlbums,
  getAlbumsByID: db.getAlbumsByID
}
