require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO USE EXPRESS MIDDLEWARE TO HANDLE COOKIES JWT
// TODO USE EXPRESS MIDDLEWARE TO POPULATE CURRENT USER

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  },
}, deets => {
  console.log(`Server is now running on port http://localhost:${deets.port}`)
})
