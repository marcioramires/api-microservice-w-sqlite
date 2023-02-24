import { openDb } from './configDB.js';
import express from 'express'

const app = express();
app.use(express.json());

openDb();

// app.get();
// app.post();
// app.put();
// app.delete();

app.listen(3000, () => console.log('Server running on port 3000 🚀'))