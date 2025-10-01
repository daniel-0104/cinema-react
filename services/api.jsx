export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export async function fetchPopularMovies() {
  try {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/popular?page=1`, // no need for ?api_key when using v4 Bearer
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch popular movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results.slice(0, 5);
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
}

// export async function fetchPopularMovies() {
//   try {
//     const response = await fetch(
//       `${TMDB_CONFIG.BASE_URL}/movie/popular?api_key=${TMDB_CONFIG.API_KEY}&language=en-US&page=1`,
//       {
//         method: "GET",
//         headers: TMDB_CONFIG.headers,
//       }
//     );
//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching popular movies:", error);
//     return [];
//   }
// }
