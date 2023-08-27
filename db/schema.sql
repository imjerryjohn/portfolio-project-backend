DROP DATABASE IF EXISTS members_dev;
CREATE DATABASE members_dev;

\c members_dev;

CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    fav_song TEXT NOT NULL,
    member_name TEXT,
    member_location TEXT,
    first_letter_j BOOLEAN NOT NULL DEFAULT FALSE,
    members_age INTEGER,
    bio TEXT,
    years_active INTEGER,
    member_photo TEXT
);