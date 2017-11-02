const bcrypt = require('bcrypt');
const saltRounds = Number(process.env.SALT_ROUNDS);
const check = process.env.DB_NAME

const hash_password = ( password ) => {
  return bcrypt.hash( password, saltRounds )
};

const hash_compare = ( password, hash ) => {
  return bcrypt.compare( password, hash )
};

module.exports = { hash_password, hash_compare }
