import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
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
const mustheader={
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "925ed9aa2dmshef7a9a67d3aa0a2p199dc8jsn9b4cc096cac9",
        "Content-Type":"application/json"
	}
}
const API = {
  fetchMovies: async (searchTerm,page) => {
    
    const endpoint = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId,page) => {
    const endpoint = `${API_URL}/games/${movieId}?key=${API_KEY}&page=${page}`;
    return await (await fetch(endpoint,mustheader)).json();
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
    return await (await fetch(creditsEndpoint,mustheader)).json();
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL,mustheader)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      return sessionId;
    }
  },
};

export default API;