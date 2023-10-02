import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('lag.db', (err) => {
  if (err !== null) {
    console.error('Error opening database:', err.message)
  } else {
    console.log('Connected to the database')
    // Create a "items" table if it doesn't exist
    db.run(
      'CREATE TABLE IF NOT EXISTS todo(id TEXT PRIMARY KEY NOT NULL, description TEXT NOT NULL,completed INT)'
    )
  }
})

export default db
