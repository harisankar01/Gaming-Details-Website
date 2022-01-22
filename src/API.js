import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
} from './config';
const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key": "925ed9aa2dmshef7a9a67d3aa0a2p199dc8jsn9b4cc096cac9"
  },
};
// const mustheader={
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
// 		"x-rapidapi-key": "925ed9aa2dmshef7a9a67d3aa0a2p199dc8jsn9b4cc096cac9",
//         "Content-Type":"application/json"
// 	}
// }
const API = {
  fetchMovies: async (searchTerm,page) => {
    
    const endpoint = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId,page) => {
    const endpoint = `${API_URL}/games/${movieId}?key=${API_KEY}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMo: async (movieId,page) => {
    let ae;
    const endpoint = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`;
   const result= await (await fetch(endpoint)).json();
   let view=result.results;
    let re=new RegExp("^"+movieId+"",'gi')
   ae=view.filter((nm)=>{
  let res= String(nm.name);
  return res.match(re)
  }
  );
  return ae;
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}/games/${movieId}?key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchgenre:async(gname)=>{
    const namee=`${API_URL}/genres/${gname}?key=${API_KEY}`;
    return await (await fetch(namee)).json();
  },
  genregames:async()=>{
    const games=`${API_URL}/genres?key=${API_KEY}`;
    return await (await fetch(games)).json();
  },
};

export default API;