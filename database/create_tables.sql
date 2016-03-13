CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS profile (
    guid uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    modal SERIAL NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    bio TEXT,
    website TEXT,
    twitter TEXT,
    phone TEXT,
    img TEXT,
    createat timestamp without time zone default (now() at time zone 'utc'),
    deleted BOOLEAN default FALSE
);

-- TESTING
INSERT INTO profile (name, email, bio, website, twitter, phone, img)
VALUES('manar sughayer', 'man.rs85@gmail.com','android and java developer','http://man-r.github.io/','@man_r0','00000000000000000000','img/portfolio/cabin.png');
