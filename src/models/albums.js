const db = require( './db/albums')

module.exports = {
  getAlbums: db.getAlbums,
  getAlbumsByID: db.getAlbumsByID,
  getAllReviews: db.getAllReviews,
  getReviewByAlbumID: db.getReviewByAlbumID,
  createReview: db.createReview,
  deleteReview: db.deleteReview
}
