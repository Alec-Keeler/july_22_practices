CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL
);

-- 10 users sign up for our website every day, and we get about 5 update/delete requests per day.
-- Our website only allows admins to search for users, which only happens a few times a day, but looks up users by email and username.

-- 10 posts are created on our website every day, and we get about 15 update/delete requests per day
-- Our website has a search feature available to all users to find posts with titles related to the given search term, this is one of the app's primary features.


-- Create an index on posts
-- Good or bad?
-- Code:

-- Create an index on users
-- Good or bad?
-- Code: