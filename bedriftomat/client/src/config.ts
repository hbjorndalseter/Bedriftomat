// You can also use an environment variable loader if needed.
const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://bedriftomat-ax4u.onrender.com/' // In production, the client and server share the same domain
  : 'http://localhost:3000'; // In development, the server runs separately

export default {
  baseUrl,
};