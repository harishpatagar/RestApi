const { createPool } = require("mysql");
/** Connection pool creation - START */

const db = createPool({
  port: 3306,
  host: "127.0.0.1",
  user: "root",
  password: "harish@4mk19cs015",
  database: "restapi",
  connectionLimit: 10,
});

/** Connection pool creation - END */
module.exports = db;
