-- CREATE TABLE users(
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR(20),
--     password VARCHAR(20),
--     profile_pic TEXT
-- );

-- CREATE TABLE posts(
--     post_id SERIAL PRIMARY KEY,
--     title VARCHAR(45),
--     img TEXT,
--     content TEXT,
--     author_id INT REFERENCES users(user_id)
-- );

-- ALTER TABLE users
-- ALTER COLUMN password TYPE TEXT;
-- HERE IS THE ALTER TABLE STATEMENT FROM THIS SKILLS CHECK*****************

-- INSERT INTO users (username, password, profile_pic) 
-- -- VALUES ('mikescott', '1234', 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png');
-- VALUES ('beets4life', '4321', 'https://vignette.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest?cb=20170701082424');

-- INSERT INTO posts (title, img, content, author_id)
-- -- VALUES ('Fear and Love', 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png', 'Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me', 1);
-- VALUES ('My Perfect Crime', 'https://vignette.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest?cb=20170701082424', 'My perfect crime is I break in a Tiffanys...', 2);