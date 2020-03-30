SELECT p.title, p.img, p.content, u.username, u.profile_pic
FROM users u
JOIN posts p ON p.user_id = u.user_id
WHERE u.user_id = $1