// Test if javaScript is linked with html
console.log("Javascript running.");

// Helper function to get random int
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Select each genre's button separate
const comedyButton = document.querySelector(".comedy");
const actionButton = document.querySelector(".action");
const horrorButton = document.querySelector(".horror");
const romanceButton = document.querySelector(".romance");
const animatedButton = document.querySelector(".animated");
const familyButton = document.querySelector(".family");
const mysteryButton = document.querySelector(".mystery");
const dramaButton = document.querySelector(".drama");

// submitButtons variable used to select all individual genre's button
const submitButtons = document.querySelectorAll("#submit");

// Create Genres Object with numbers associated to Strings of genres
const genreKey = {
  35: "Comedy",
  28: "Action",
  27: "Horror",
  10749: "Romance",
  16: "Animated",
  10751: "Family",
  9648: "Mystery",
  18: "Drama",
};

// Log elements
// console.log(comedyButton);
// console.log(actionButton);
// console.log(horrorButton);
// console.log(romanceButton);
// console.log(animatedButton);
// console.log(familyButton);
// console.log(mysteryButton);
// console.log(dramaButton);

// Create a genreID variable to hold the genreID for the search URL
let genreID = "";

// When genre button is clicked, update the genreID variable
comedyButton.addEventListener("click", (e) => {
  genreID = "35";
  console.log('genreID: ', genreID);
});
actionButton.addEventListener("click", (e) => {
  genreID = "28";
  console.log('genreID: ', genreID);
});
horrorButton.addEventListener("click", (e) => {
  genreID = "27";
  console.log('genreID: ', genreID);
});
romanceButton.addEventListener("click", (e) => {
  genreID = "10749";
  console.log('genreID: ', genreID);
});
animatedButton.addEventListener("click", (e) => {
  genreID = "16";
  console.log('genreID: ', genreID);
});
familyButton.addEventListener("click", (e) => {
  genreID = "10751";
  console.log('genreID: ', genreID);
});
mysteryButton.addEventListener("click", (e) => {
  genreID = "9648";
  console.log('genreID: ', genreID);
});
dramaButton.addEventListener("click", (e) => {
  genreID = "18";
  console.log('genreID: ', genreID);
});

let movieObjects = [];

// Generate 10 movie objects based on genre
submitButtons.forEach(submitButton => {
  submitButton.addEventListener("click", async (e) => {

    // Variable to hold API key used in the URLs
    const myKey = "35767d45d7722702536f6441fc40cce4";

    // Fetch information needed from API to get list of movies that fall under the user selected genre
    const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${myKey}&language=en-US&sort_by=revenue.desc&with_genres=${genreID}`
    const response = await fetch(movieURL);
    const data = await response.json();

    // Create 10 Movie Objects based on the 20 movie results from selected genre
    for (let i = 0; i < 10; i++) {

      // Variables to hold array data
      let similarMovies = [];
      let associatedGenres = [];
      let castMembers = [];

      // Variable to hold the individual movie's ID
      let movieID = data.results[i].id;

      // Fetch the movie's details from the API
      const individualMovieURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${myKey}&language=en-US`;
      const response2 = await fetch(individualMovieURL);
      const data2 = await response2.json();

      // Fetch the movie data for top 5 cast members
      const castURL = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${myKey}&language=en-US`;
      const response3 = await fetch(castURL);
      const data3 = await response3.json();

      // Fetch the movie data for the top 5 similar movies
      const similarMoviesURL = `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${myKey}&language=en-US&page=1`
      const response4 = await fetch(similarMoviesURL);
      const data4 = await response4.json();

      // Update similarMovies/castMembers variables with top 5 similar movies/ cast members
      for (let i = 0; i < 5; i++) { // Check if 5 movies/cast members with every movie
        similarMovies.push(data4.results[i].original_title);
        castMembers.push(data3.cast[i].name);
      }
      // Update associated genres with all genres associated with movie
      for (let i = 0; i < data2.genres.length; i++) {
        associatedGenres.push(data2.genres[i].name);
      }

      // Create Movie Object
      let movieInfoObject = {
        title: data2.original_title,
        genre: genreKey[genreID],
        releaseYear: data2.release_date.slice(0, 4),
        overview: data2.overview,
        posterPath: 'https://image.tmdb.org/t/p/original/' + data2.poster_path,
        tagline: data2.tagline,
        similarMovies: similarMovies,
        castMembers: castMembers,
        associatedGenres: associatedGenres,
      }

      // Push Object to Array
      movieObjects.push(movieInfoObject);
    }

    console.log('Movie objects: ', movieObjects);

    // Add each movie object's data to local storage
    for (let i = 1; i < 11; i++) {
      localStorage.setItem(`title${i}`, movieObjects[i - 1].title);
      localStorage.setItem(`genre${i}`, movieObjects[i - 1].genre);
      localStorage.setItem(`releaseYear${i}`, movieObjects[i - 1].releaseYear);
      localStorage.setItem(`overview${i}`, movieObjects[i - 1].overview);
      localStorage.setItem(`posterPath${i}`, movieObjects[i - 1].posterPath);
      localStorage.setItem(`tagline${i}`, movieObjects[i - 1].tagline);

      localStorage.setItem(`similarMovies${i}`, JSON.stringify(movieObjects[i - 1].similarMovies));
      localStorage.setItem(`castMembers${i}`, JSON.stringify(movieObjects[i - 1].castMembers));
      localStorage.setItem(`associatedGenres${i}`, JSON.stringify(movieObjects[i - 1].associatedGenres));
    }
  });
});