const db = require( './connection' )

const getAlbums = () => {
  return db.any(`
    SELECT * FROM albums
    `, [])
    .catch( error => {
      console.error( {message: "Get all albums error",error, arguments: arguments})
      throw error
    })
}

const getAlbumsByID = ( albumID ) => {
  return db.any(`
    SELECT * FROM albums
    WHERE id = $1
    `, [ albumID ])
    .catch( error => {
      console.error( {message: "Get albums by ID", arguments: arguments})
      throw error
    })
}

module.exports = {
  getAlbums,
  getAlbumsByID,
}
