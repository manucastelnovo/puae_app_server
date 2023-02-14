export const SELECT_ALL_FOOD_QUERY = `SELECT * FROM puae.foods WHERE user_id = $1;`;

export const INSERT_FOOD_QUERY = `INSERT INTO puae.foods(
    user_id, food_name, profit, production_cost, description, food_type, image)
    VALUES ($1, $2, $3, $4, $5, $6, $7);
    RETURNING *;
`