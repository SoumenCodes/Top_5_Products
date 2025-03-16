const { Client } = require("pg");

const client = new Client({
  host: process.env.DB_HOST || "my_postgres",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "myuser",
  password: process.env.DB_PASSWORD || "mypassword",
  database: process.env.DB_NAME || "mydb",
});

client
  .connect()
  .then(() => {
    console.log("✅ Connected to PostgreSQL successfully!");
    return client.query("SELECT NOW()");
  })
  .then((res) => {
    console.log("Server Time:", res.rows[0]);
    client.end();
  })
  .catch((err) => console.error("❌ Connection Error:", err.stack));
