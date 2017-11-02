CREATE TABLE album (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);


CREATE TABLE member (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  date_joined TIMESTAMP DEFAULT now(),
  pic_url VARCHAR(1000),
  role VARCHAR(255) DEFAULT 'member'
);

CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  album_id INTEGER references album(id),
  member_id INTEGER references member(id),
  description VARCHAR(1000) NOT NULL,
  date_posted TIMESTAMP DEFAULT now()
);
