
console.log("Javascript running.");

// Helper function to get random int
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// User interaction
const comedyButton = document.querySelector(".comedy");
const actionButton = document.querySelector(".action");
const horrorButton = document.querySelector(".horror");
const romanceButton = document.querySelector(".romance");
const animatedButton = document.querySelector(".animated");
const familyButton = document.querySelector(".family");
const mysteryButton = document.querySelector(".mystery");
const dramaButton = document.querySelector(".drama");

const submitButtons = document.querySelectorAll("#submit");

// Additional buttons when needed
// const scifiButton = document.querySelector("#scifi");
// const thrillerButton = document.querySelector("#thriller");

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
// console.log('genreID: ', genreID);

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


console.log('genreID: ', genreID);

// Variables to hold movie info
let title = "";
let genre = "";
let releaseYear = "";
let overview = "";
let posterPath = "";
let releaseDate = "";
let tagline = "";

// Hints
let castMembers = [];
let associatedGenres = [];

// Generate the questions based on genre
submitButtons.forEach(submitButton => {
  submitButton.addEventListener("click", async (e) => {
    console.log("Submit Button Clicked.");
    const myKey = "35767d45d7722702536f6441fc40cce4";

    // 1. Construct the API's URL + Parameters
    const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${myKey}&language=en-US&sort_by=revenue.desc&with_genres=${genreID}`

    // 2. Use Fetch to get a response from the API
    const response = await fetch(movieURL);
    console.log('response:', response);

    // 3. Use json() to get the JSON from the response.
    const data = await response.json();
    console.log('data: ', data);

    let movieID = data.results[getRandomInt(19)].id;
    console.log(movieID);

    const individualMovieURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${myKey}&language=en-US`;

    const response2 = await fetch(individualMovieURL);
    console.log('response2:', response2);

    const data2 = await response2.json();
    console.log('data2: ', data2);

    const castURL = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${myKey}&language=en-US`;

    const response3 = await fetch(castURL);
    console.log('response3: ', response3);

    const data3 = await response3.json();
    console.log('data3: ', data3);

    //  Update cast variable with top 5 actors/actresses associated with movie
    for (let i = 0; i < 5; i++){
      castMembers.push(data3.cast[i].name);
    }

    // Update associated genres with all genres associated with movie
    for (let i = 0; i < data2.genres.length; i++){
      associatedGenres.push(data2.genres[i].name);
    }
    
    // Update movie detail variables
    title = data2.original_title;
    genre = genreKey[genreID];
    releaseYear = data2.release_date.slice(0, 4);
    overview = data2.overview;
    posterPath = 'https://image.tmdb.org/t/p/original/' + data2.poster_path;
    tagline = data2.tagline;
    // Print Data (Test)
    console.log('Title: ', title);
    console.log('Genre: ', genre);
    console.log('Release year:', releaseYear);
    console.log('Overview: ', overview);
    console.log('Poster path: ', posterPath);
    console.log('Tagline: ', tagline);

    console.log('Cast member list: ', castMembers);
    console.log('Associated genres: ', associatedGenres);

    // Format question #1:
    const question1 = document.querySelector(".question1");
    // console.log('Question 1: ', question1);
    question1.innerHTML = `This ${genre} is about ${overview}. Movie tagline: ${tagline}`;
    
  });
});


// Hidding additional questions except first

// let sections = document.querySelectorAll("#questions.section:not(:first-of-type)");
//   for (let section of sections) {
//     section.classList.add("hidden");
//   };

// let visibleQuestions = 1;

// if (visibleQuestions <= 7) {
//       const section = "#questions .section:nth-child(" + visibleQuestions + ")";
//       const nextQuestion = document.querySelector(section);
//       console.log(nextQuestion);
//       nextQuestion.classList.remove("hidden");

//       // If its the last question, unhide the result.  
//     } 
// input answer when hit enter WORKS NOT HERE????

// const myText = document.querySelector(".my-text");

// myText.addEventListener("keyup", (e) =>{
//   if(e.keyCode === 13){
//     console.log("something submitted");
//   }
// });


const myText = document.querySelectorAll(".my-text");

myText.forEach((mytext) => {
  mytext.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      // clear input after hitting enter
      let inputAnswer = document.querySelectorAll("input");

      inputAnswer.forEach(input => input.value = "");

    }

    let sections = document.querySelectorAll("#questions section:not(:first-of-type)");
    for (let section of sections) {
      section.classList.remove("hidden");
    };




  });
});


// make hint show when clicked

// const questionDiv = document.querySelector("#question");

// 1 hints
const firstHintButtons = document.querySelectorAll(".chintbutton");

firstHintButtons.forEach((chintbutton) => {
  chintbutton.addEventListener("click", (e) => {
    console.log("first hint hit");

  });
});

// 2 hints
const secondHintButtons = document.querySelectorAll(".ahintbutton");

secondHintButtons.forEach((ahintbutton) => {
  ahintbutton.addEventListener("click", (e) => {
    console.log("second hint hit");

  });
});

// 3 hints
const thirdHintButtons = document.querySelectorAll(".rhintbutton");

thirdHintButtons.forEach((rhintbutton) => {
  rhintbutton.addEventListener("click", (e) => {
    console.log("third hint hit");

  });
});

// 4 hints
const fourthHintButtons = document.querySelectorAll(".hhintbutton");

fourthHintButtons.forEach((hhintbutton) => {
  hhintbutton.addEventListener("click", (e) => {
    console.log("fourth hint hit");

  });
});
// 5 hints
const fifthHintButtons = document.querySelectorAll(".anhintbutton");

fifthHintButtons.forEach((anhintbutton) => {
  anhintbutton.addEventListener("click", (e) => {
    console.log("fifth hint hit");

  });
});
// 6 hints
const sixthHintButtons = document.querySelectorAll(".fhintbutton");

sixthHintButtons.forEach((fhintbutton) => {
  fhintbutton.addEventListener("click", (e) => {
    console.log("sixth hint hit");

  });
});
// 7 hints
const seventhHintButtons = document.querySelectorAll(".mhintbutton");

seventhHintButtons.forEach((mhintbutton) => {
  mhintbutton.addEventListener("click", (e) => {
    console.log("seventh hint hit");

  });
});
//8 hints
const eigthHintButtons = document.querySelectorAll(".dhintbutton");

eigthHintButtons.forEach((dhintbutton) => {
  dhintbutton.addEventListener("click", (e) => {
    console.log("eigth hint hit");

  });
});

//9 hints
const ninthHintButtons = document.querySelectorAll(".dhintbutton");

ninthHintButtons.forEach((dhintbutton) => {
  dhintbutton.addEventListener("click", (e) => {
    console.log("ninth hint hit");

  });
});

//10 hints
const tenthHintButtons = document.querySelectorAll(".dhintbutton");

tenthHintButtons.forEach((dhintbutton) => {
  dhintbutton.addEventListener("click", (e) => {
    console.log("tenth hint hit");

  });
});