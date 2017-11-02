const db = require( './connection' )

const getAlbums = () => {
  return db.any(`
    SELECT * FROM album
    `, [])
    .catch( error => {
      console.error( {message: "Get all albums error",error, arguments: arguments})
      throw error
    })
}

const getAlbumsByID = ( albumID ) => {
  return db.any(`
    SELECT * FROM album
    WHERE id = $1
    `, [ albumID ])
    .catch( error => {
      console.error( {message: "Get albums by ID", arguments: arguments})
      throw error
    })
}

const getAllReviews = () => {
  return db.any(`
    SELECT
      album.title AS title,
      review.description, review.date_posted AS review_date,
      member.name AS reviewer_name,
      review.id AS review_id,
      member.id AS member_id
    FROM review
    JOIN album
    ON
      album.id = review.album_id
    JOIN member
    ON
      member.id = review.member_id
    `, [])
    .catch( error => {
      console.error( {message: "Get all reviews error",error, arguments: arguments})
      throw error
    })
}

const getReviewByAlbumID = ( albumID ) => {
  return db.any(`
    SELECT
      album.title AS title,
      review.description, review.date_posted AS review_date,
      member.name AS reviewer_name,
      review.id AS review_id,
      member.id AS member_id
    FROM review
    JOIN album
    ON
      album.id = review.album_id
    JOIN member
    ON
      member.id = review.member_id
    WHERE review.album_id = $1::int
    `, [ albumID ])
    .catch( error => {
      console.error( {message: "Get all reviews error",error, arguments: arguments})
      throw error
    })
}

const createReview = ( albumID, memberId, description ) =>{
  return db.query(`
    INSERT INTO
      review (albumID, memberId, description)
    VALUES
      ($1::int, $2::int, $3::text)
    RETURNING
      *
    `,
    [ albumID, memberId, description, ])
    .catch( error => {
      console.error( {message: "Cannot create review", arguments: arguments})
      throw error
    })
}

const deleteReview = ( reviewID ) =>{
  return db.query(`
    DELETE FROM review
    WHERE id=$1::int
    RETURNING
      *
    `,
    [ reviewID ])
    .catch( error => {
      console.error( {message: "Cannot delete review", arguments: arguments})
      throw error
    })
}

module.exports = {
  getAlbums,
  getAlbumsByID,
  getAllReviews,
  getReviewByAlbumID,
  createReview,
  deleteReview
}
