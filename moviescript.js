console.log("script runnning");

const myText = document.querySelectorAll(".my-text");
const moveOn = document.querySelectorAll(".moveonbutton");

let img = document.querySelector("img");

// Selects all image elements to store movie posters
const poster1 = document.querySelector(".poster1");
const poster2 = document.querySelector(".poster2");
const poster3 = document.querySelector(".poster3");
const poster4 = document.querySelector(".poster4");
const poster5 = document.querySelector(".poster5");
const poster6 = document.querySelector(".poster6");
const poster7 = document.querySelector(".poster7");
const poster8 = document.querySelector(".poster8");
const poster9 = document.querySelector(".poster9");
const poster10 = document.querySelector(".poster10");

myText.forEach((mytext) => {
  mytext.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      let inputAnswer = document.querySelectorAll("input");
      inputAnswer.forEach(input => input.value = "");
    };
  });
});

// // counter
//   const finalScore = document.querySelector("#finalscore");
//   console.log(finalScore);
//   let tries = 0;
//   let correct = 0;
//   inputField.addEventListener("change", (e) => {
//     let guess = inputField.value;
//     console.log("you guessed");


// KEEPING QUERYSELECTOR FOR NOW BUT WILL CHANGE TO QUERYSELECTORALL
const inputField = document.querySelectorAll(".fields");
// counter
const finalScore = document.querySelector("#finalscore");



// Need later for API
let currentQuestion =
  "This Comedy is about Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.. Movie tagline: The past is not what it seems.";


// Array to hold all correct movie titles so we can index through them
let answerArray = [localStorage.getItem('title1').toLowerCase(), localStorage.getItem('title2').toLowerCase(), localStorage.getItem('title3').toLowerCase(), localStorage.getItem('title4').toLowerCase(), localStorage.getItem('title5').toLowerCase(), localStorage.getItem('title6').toLowerCase(), localStorage.getItem('title7').toLowerCase(), localStorage.getItem('title8').toLowerCase(), localStorage.getItem('title9').toLowerCase(), localStorage.getItem('title10').toLowerCase()]

// Array to hold each poster's Path
let posterArray = [localStorage.getItem('posterPath1'), localStorage.getItem('posterPath2'), localStorage.getItem('posterPath3'), localStorage.getItem('posterPath4'), localStorage.getItem('posterPath5'), localStorage.getItem('posterPath6'), localStorage.getItem('posterPath7'), localStorage.getItem('posterPath8'), localStorage.getItem('posterPath9'), localStorage.getItem('posterPath10')]

// Array to hold each poster's Element
let posterElementArray = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9, poster10]

// Variable to hold our index to access the correct movie title answer
let index = 0;

// Variable to keep track of user's current score
let currentScore = 0;
let visibleQuestions = 1;
let hintScore = 20;


// Track User Input From TextBoxes
inputField.forEach((fields) => {
  fields.addEventListener("change", (e) => {

    // User Input
    let guess = fields.value;
    console.log("you guessed");

    // want to reveal the move on button if they enter wrong answers,but keep next question hidden, also place holder for API answer.

    // If user guesses the correct movie title
    if (guess.toLowerCase() === answerArray[index]) {
      // Increase answer num to move onto next question's information
      
      // Change the left image to movie poster
      posterElementArray[index].src = posterArray[index];

      fields.classList.add("is-hidden");
      // currentScore = currentScore + 100;
      // console.log(currentScore);

      visibleQuestions++;
      console.log(visibleQuestions);

      if (visibleQuestions <= 10) {
        const section = ".section:nth-child(" + visibleQuestions + ")";
        const nextQuestion = document.querySelector(section);
        console.log(nextQuestion);
        nextQuestion.classList.remove("is-hidden")
      };

      // remove the hidden element on the poster to reveal the poster

      // increment currentScore
      currentScore = currentScore + 100;
      console.log(currentScore);
      finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";

      

      // Last thing you do after a right answer, increase the index
      index++;
    }
    // Wrong Question entered 
    else {
      moveOn.forEach((moveonbutton) => {
        // Reveal the move on button
        moveonbutton.classList.remove("is-hidden");
        console.log("move on button shown");

        // If move on button is clicked...
        moveonbutton.addEventListener("click", (e) => {
          // Reveal movie poster if give up button is clicked
          posterElementArray[index].src = posterArray[index];

          // Increase visible questions
          visibleQuestions++;

          // Increase the index after give up button is clicked
          index++;

          fields.classList.add("is-hidden");

          if (visibleQuestions <= 10) {
            const section = ".section:nth-child(" + visibleQuestions + ")";
            const nextQuestion = document.querySelector(section);
            console.log(nextQuestion);
            nextQuestion.classList.remove("is-hidden");

          }

        });
      });
   
    }
 
  });
});

// Question 1 Hint Buttons
const question1hint1 = document.querySelector(".question1hint1");
const question1hint2 = document.querySelector(".question1hint2");
const question1hint3 = document.querySelector(".question1hint3");

question1hint1.addEventListener("click", (e) => {
  question1hint1.innerHTML = 'Release year is ' + localStorage.getItem('releaseYear1');
  // take points off current score for hint
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question1hint2.addEventListener("click", (e) => {
  question1hint2.innerHTML = 'Cast includes: ' + JSON.parse(localStorage.getItem('castMembers1'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question1hint3.addEventListener("click", (e) => {
  question1hint3.innerHTML = 'Similar movies are: ' + JSON.parse(localStorage.getItem('similarMovies1'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})

// Question 2 Hint Buttons
const question2hint1 = document.querySelector(".question2hint1");
const question2hint2 = document.querySelector(".question2hint2");
const question2hint3 = document.querySelector(".question2hint3");

question2hint1.addEventListener("click", (e) => {
  question2hint1.innerHTML = 'Release year is ' + localStorage.getItem('releaseYear2');
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question2hint2.addEventListener("click", (e) => {
  question2hint2.innerHTML = 'Cast includes: ' + JSON.parse(localStorage.getItem('castMembers2'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question2hint3.addEventListener("click", (e) => {
  question2hint3.innerHTML = 'Similar movies are: ' + JSON.parse(localStorage.getItem('similarMovies2'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})

// Question 3 Hint Buttons
const question3hint1 = document.querySelector(".question3hint1");
const question3hint2 = document.querySelector(".question3hint2");
const question3hint3 = document.querySelector(".question3hint3");

question3hint1.addEventListener("click", (e) => {
  question3hint1.innerHTML = 'Release year is ' + localStorage.getItem('releaseYear3');
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question3hint2.addEventListener("click", (e) => {
  question3hint2.innerHTML = 'Cast includes: ' + JSON.parse(localStorage.getItem('castMembers3'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question3hint3.addEventListener("click", (e) => {
  question3hint3.innerHTML = 'Similar movies are: ' + JSON.parse(localStorage.getItem('similarMovies3'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})

// Question 4 Hint Buttons
const question4hint1 = document.querySelector(".question4hint1");
const question4hint2 = document.querySelector(".question4hint2");
const question4hint3 = document.querySelector(".question4hint3");

question4hint1.addEventListener("click", (e) => {
  question4hint1.innerHTML = 'Release year is ' + localStorage.getItem('releaseYear4');
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question4hint2.addEventListener("click", (e) => {
  question4hint2.innerHTML = 'Cast includes: ' + JSON.parse(localStorage.getItem('castMembers4'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question4hint3.addEventListener("click", (e) => {
  question4hint3.innerHTML = 'Similar movies are: ' + JSON.parse(localStorage.getItem('similarMovies4'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})

// Question 5 Hint Buttons
const question5hint1 = document.querySelector(".question5hint1");
const question5hint2 = document.querySelector(".question5hint2");
const question5hint3 = document.querySelector(".question5hint3");

question5hint1.addEventListener("click", (e) => {
  question5hint1.innerHTML = 'Release year is ' + localStorage.getItem('releaseYear5');
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question5hint2.addEventListener("click", (e) => {
  question5hint2.innerHTML = 'Cast includes: ' + JSON.parse(localStorage.getItem('castMembers5'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question5hint3.addEventListener("click", (e) => {
  question5hint3.innerHTML = 'Similar movies are: ' + JSON.parse(localStorage.getItem('similarMovies5'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})

// Question 6 Hint Buttons
const question6hint1 = document.querySelector(".question6hint1");
const question6hint2 = document.querySelector(".question6hint2");
const question6hint3 = document.querySelector(".question6hint3");

question6hint1.addEventListener("click", (e) => {
  question6hint1.innerHTML = 'Release year is ' + localStorage.getItem('releaseYear6');
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question6hint2.addEventListener("click", (e) => {
  question6hint2.innerHTML = 'Cast includes: ' + JSON.parse(localStorage.getItem('castMembers6'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question6hint3.addEventListener("click", (e) => {
  question6hint3.innerHTML = 'Similar movies are: ' + JSON.parse(localStorage.getItem('similarMovies6'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})

// Question 7 Hint Buttons
const question7hint1 = document.querySelector(".question7hint1");
const question7hint2 = document.querySelector(".question7hint2");
const question7hint3 = document.querySelector(".question7hint3");

question7hint1.addEventListener("click", (e) => {
  question7hint1.innerHTML = 'Release year is ' + localStorage.getItem('releaseYear7');
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question7hint2.addEventListener("click", (e) => {
  question7hint2.innerHTML = 'Cast includes: ' + JSON.parse(localStorage.getItem('castMembers7'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question7hint3.addEventListener("click", (e) => {
  question7hint3.innerHTML = 'Similar movies are: ' + JSON.parse(localStorage.getItem('similarMovies7'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})

// Question 8 Hint Buttons
const question8hint1 = document.querySelector(".question8hint1");
const question8hint2 = document.querySelector(".question8hint2");
const question8hint3 = document.querySelector(".question8hint3");

question8hint1.addEventListener("click", (e) => {
  question8hint1.innerHTML = 'Release year is ' + localStorage.getItem('releaseYear8');
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question8hint2.addEventListener("click", (e) => {
  question8hint2.innerHTML = 'Cast includes: ' + JSON.parse(localStorage.getItem('castMembers8'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question8hint3.addEventListener("click", (e) => {
  question8hint3.innerHTML = 'Similar movies are: ' + JSON.parse(localStorage.getItem('similarMovies8'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})

// Question 9 Hint Buttons
const question9hint1 = document.querySelector(".question9hint1");
const question9hint2 = document.querySelector(".question9hint2");
const question9hint3 = document.querySelector(".question9hint3");

question9hint1.addEventListener("click", (e) => {
  question9hint1.innerHTML = 'Release year is ' + localStorage.getItem('releaseYear9');
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question9hint2.addEventListener("click", (e) => {
  question9hint2.innerHTML = 'Cast includes: ' + JSON.parse(localStorage.getItem('castMembers9'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question9hint3.addEventListener("click", (e) => {
  question9hint3.innerHTML = 'Similar movies are: ' + JSON.parse(localStorage.getItem('similarMovies9'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})

// Question 10 Hint Buttons
const question10hint1 = document.querySelector(".question10hint1");
const question10hint2 = document.querySelector(".question10hint2");
const question10hint3 = document.querySelector(".question10hint3");

question10hint1.addEventListener("click", (e) => {
  question10hint1.innerHTML = 'Release year is ' + localStorage.getItem('releaseYear10');
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question10hint2.addEventListener("click", (e) => {
  question10hint2.innerHTML = 'Cast includes: ' + JSON.parse(localStorage.getItem('castMembers10'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})
question10hint3.addEventListener("click", (e) => {
  question10hint3.innerHTML = 'Similar movies are: ' + JSON.parse(localStorage.getItem('similarMovies10'));
  // take points off current score
  currentScore = currentScore -= hintScore;
  console.log("points off");
  finalScore.innerHTML = "<b>And the results are " + currentScore + ".</b>";
})

// Questions:

// Format question #1:
const question1 = document.querySelector("#question1");
// console.log('Question 1: ', question1);
question1.innerHTML = 'This ' + localStorage.getItem('genre1') + ' is about ' + localStorage.getItem('overview1') + '. Movie tagline: ' + localStorage.getItem('tagline1');

// Format question #2:
const question2 = document.querySelector("#question2");
// console.log('Question 2: ', question2);
question2.innerHTML = 'This ' + localStorage.getItem('genre2') + ' is about ' + localStorage.getItem('overview2') + '. Movie tagline: ' + localStorage.getItem('tagline2');

// Format question #3:
const question3 = document.querySelector("#question3");
// console.log('Question 3: ', question3);
question3.innerHTML = 'This ' + localStorage.getItem('genre3') + ' is about ' + localStorage.getItem('overview3') + '. Movie tagline: ' + localStorage.getItem('tagline3');

// Format question #4:
const question4 = document.querySelector("#question4");
// console.log('Question 4: ', question1);
question4.innerHTML = 'This ' + localStorage.getItem('genre4') + ' is about ' + localStorage.getItem('overview4') + '. Movie tagline: ' + localStorage.getItem('tagline4');

// Format question #5:
const question5 = document.querySelector("#question5");
// console.log('Question 5: ', question5);
question5.innerHTML = 'This ' + localStorage.getItem('genre5') + ' is about ' + localStorage.getItem('overview5') + '. Movie tagline: ' + localStorage.getItem('tagline5');

// Format question #6:
const question6 = document.querySelector("#question6");
// console.log('Question 6: ', question6);
question6.innerHTML = 'This ' + localStorage.getItem('genre6') + ' is about ' + localStorage.getItem('overview6') + '. Movie tagline: ' + localStorage.getItem('tagline6');

// Format question #7:
const question7 = document.querySelector("#question7");
// console.log('Question 7: ', question7);
question7.innerHTML = 'This ' + localStorage.getItem('genre7') + ' is about ' + localStorage.getItem('overview7') + '. Movie tagline: ' + localStorage.getItem('tagline7');
// Format question #1:
const question8 = document.querySelector("#question8");
// console.log('Question 8: ', question8);
question8.innerHTML = 'This ' + localStorage.getItem('genre8') + ' is about ' + localStorage.getItem('overview8') + '. Movie tagline: ' + localStorage.getItem('tagline8');

// Format question #9:
const question9 = document.querySelector("#question9");
// console.log('Question 9: ', question9);
question9.innerHTML = 'This ' + localStorage.getItem('genre9') + ' is about ' + localStorage.getItem('overview9') + '. Movie tagline: ' + localStorage.getItem('tagline9');

// Format question #10:
const question10 = document.querySelector("#question10");
// console.log('Question 10: ', question10);
question10.innerHTML = 'This ' + localStorage.getItem('genre10') + ' is about ' + localStorage.getItem('overview10') + '. Movie tagline: ' + localStorage.getItem('tagline10');