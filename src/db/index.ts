import * as sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
  return open({
    filename: 'todo.db',
    driver: sqlite3.Database
  });
}

// Initialize the database with the tasks table
export async function initializeDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT,
      createdAt INTEGER,
      lastModifiedAt INTEGER
    );

    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY NOT NULL,
      userId INTEGER,
      title TEXT NOT NULL,
      deadline INTEGER,
      done INTEGER,
      createdAt INTEGER,
      lastModifiedAt INTEGER,
      FOREIGN KEY(userId) REFERENCES users(id)
    );

    INSERT INTO users (name, createdAt, lastModifiedAt) VALUES ('username', `+Date.now()+`,`+Date.now()+`);
  `);
}
