const db = require( './connection' )

const createUser = function(name, email, password){
  return db.query(`
    INSERT INTO
      member (name, email, password)
    VALUES
      ($1::text, $2::text, $3::text)
    RETURNING
      *
    `,
    [ name, email, password, ])
    .catch(error => { console.log(error.message);
    });
};

const findUser = function(email){
  return db.oneOrNone(`
    SELECT * FROM member
    WHERE email = $1
    `,
  [ email ])
  .catch(error => { console.log(error.message);
  });
};

module.exports = {
  createUser,
  findUser
}
