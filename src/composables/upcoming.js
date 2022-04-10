const uri =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=18a017b1725a276ac9a9838ec5345147&language=en-US&page=1";

export async function getUpcoming() {
  const res = await fetch(uri);
  const data = await res.json();
  
  return data.results;
}
