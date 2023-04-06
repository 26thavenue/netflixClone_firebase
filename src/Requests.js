export const keys = "4188d644aaa2386ba91778d58f47ff74";

const baseUrl = "https://api.themoviedb.org/3/movie";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${keys}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${keys}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${keys}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/movie/movie?api_key=${keys}&language=en-US&query=horror&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${keys}&language=en-US&page=1`
};

export default requests;
