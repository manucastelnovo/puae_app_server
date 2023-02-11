export const SELECT_USER_QUERY = `SELECT * FROM puae.users WHERE name = $1;`;

export const INSERT_USER_QUERY = `
INSERT INTO puae.users (name, email, password)
VALUES ($1, $2, $3)
RETURNING *;
`