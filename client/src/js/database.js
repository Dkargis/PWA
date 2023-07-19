import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const addDb = async (content) => {
const db = await openDB('jate', 1);
await db.add('jate', { content });
console.log('Added to jate database', content);
};



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
const db = await openDB('jate', 1);
const content = await db.getAll('jate');
console.log('Got from jate database', content);
return content;
}

initdb();
