const Pool = require("pg").Pool

const pool = new Pool({
  user: "alun",
  password: "alunxp",
  database: "postgres",
  host: "localhost",
  port: "5432"
})

module.exports = pool


