import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1,{
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
export const putDb = async (content) => {
const db = await openDB('jate');
const test = db.transaction('jate', 'readwrite');
const store = test.objectStore('jate');
const request= store.put({ content });
const result = await request;
console.log('Added to jate database', result);
};



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
const db = await openDB('jate');
const test = db.transaction('jate', 'readonly');
const store = test.objectStore('jate');
const request = store.getAll();
const result = await request;
console.log('Got from jate database', result);
}

initdb();
