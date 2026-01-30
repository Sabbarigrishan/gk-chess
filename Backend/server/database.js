import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
    return open({
        filename: './server/database.db',
        driver: sqlite3.Database
    });
}

export async function initDb() {
    const db = await openDb();
    await db.exec(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      studentName TEXT NOT NULL,
      parentName TEXT,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      level TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
    console.log('Database initialized');
    return db;
}
