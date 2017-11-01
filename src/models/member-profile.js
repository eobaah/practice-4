const db = require( './db/member-profile')

module.exports = {
  createUser: db.createUser,
  findUser: db.findUser
}
