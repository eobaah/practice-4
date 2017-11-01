const db = require( './connection' )

const createUser = function( name, username, password ){
  return db.query(`
    INSERT INTO
      users ( name, username, password )
    VALUES
      ( $1::text, $2::text, , $3::text )
    RETURNING
      *
    `,
    [ name, username, password, ] )
    .catch(error => { console.log( error.message );
    });
};

const findUser = function( username ){
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
    `,
  [ username ] )
  .catch( error => { console.log( error.message );
  });
};

module.exports = {
  createUser,
  findUser
};
