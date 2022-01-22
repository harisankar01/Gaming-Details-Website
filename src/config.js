const API_URL = 'https://api.rawg.io/api';
const API_KEY = 'cb56eed0e68c4622b7311c3bac19f215';
console.log(API_KEY);
const SEARCH_BASE_URL = `${API_URL}/games?key=${API_KEY}`;
const POPULAR_BASE_URL = `${API_URL}/games?key=${API_KEY}`;
// For login and voting




export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
};