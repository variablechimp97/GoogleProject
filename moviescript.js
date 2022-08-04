console.log("script runnning");

const myText = document.querySelectorAll(".my-text");

const mySection = document.querySelectorAll(".section");

const mySectionss = document.querySelectorAll(".sectionss")

const moveOn = document.querySelectorAll(".moveonbutton");

myText.forEach((mytext) => {
  mytext.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      let inputAnswer = document.querySelectorAll("input");

      inputAnswer.forEach(input => input.value = "");

    };
  });

  //   const inputField = document.querySelector("#comedysearch");
  // // counter
  //   const finalScore = document.querySelector("#finalscore");
  //   console.log(finalScore);
  //   let tries = 0;
  //   let correct = 0;
  //   inputField.addEventListener("change", (e) => {
  //     let guess = inputField.value;
  //     console.log("you guessed");

  //     if(tries === 3){
  //       moveOn.classList.remove("is-hidden");
  //       console.log("move on button shown");
  //     }

});





// KEEPING QUERYSELECTOR FOR NOW BUT WILL CHANGE TO QUERYSELECTORALL
const inputField = document.querySelectorAll(".fields");
// counter
const finalScore = document.querySelector("#finalscore");
console.log(finalScore);
// Need later for API
let currentQuestion =
  "Which movie in the genre of Comedy is credited with the line 'My name is Jeff' as a answer to a question of what is your name? ";

let currentAnswer = "21 Jump Street";
let currentScore = 0;

// made a new class name for each input field to get around having a second add hidden classlist
inputField.forEach((fields) => {
fields.addEventListener("change", (e) => {
  let guess = fields.value;
  console.log("you guessed");
  // want to reveal the move on button if they enter wrong answers,but keep next question hidden, also place holder for API answer.
  // Right Answer
  if(guess === "Frozen" ) {

    fields.classList.add("is-hidden");
    // currentScore = currentScore + 100;
    // console.log(currentScore);
    mySection.forEach((section) => {
      let visibleQuestions = 1;
      visibleQuestions++;
      if (visibleQuestions <= 10) {
        const section = ".section:nth-child(" + visibleQuestions + ")";
        const nextQuestion = document.querySelector(section);
        console.log(nextQuestion);
        nextQuestion.classList.remove("is-hidden");
        
      }
    })
     currentScore = currentScore + 100;
    console.log(currentScore);
    finalScore.innerHTML = "And the results are " + currentScore + ".";
  }
// Wrong Question entered 
  else {
    // moveonbutton.classList.remove("is-hidden");
    // console.log("move on button shown");

    moveOn.forEach((moveonbutton) => {
      moveonbutton.classList.remove("is-hidden");
    console.log("move on button shown");
    moveonbutton.addEventListener("click", (e) => {

      // inputField.classList.add("is-hidden");

      mySectionss.forEach((sectionss) => {
        let visibleQuestionss = 1;
        visibleQuestionss++;
        if (visibleQuestionss <= 10) {
          const sectionss = ".sectionss:nth-child(" + visibleQuestionss + ")";
          const nextQuestions = document.querySelector(sectionss);
          console.log(nextQuestions);
          nextQuestions.classList.remove("is-hidden");
        }
      })
    });
  });
  }
  });
});





// STILL NEED TO SHOW HINT WHEN CLICKED API??

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
const ninthHintButtons = document.querySelectorAll(".nhintbutton");

ninthHintButtons.forEach((nhintbutton) => {
  nhintbutton.addEventListener("click", (e) => {
    console.log("ninth hint hit");

  });
});

//10 hints
const tenthHintButtons = document.querySelectorAll(".thintbutton");

tenthHintButtons.forEach((thintbutton) => {
  thintbutton.addEventListener("click", (e) => {
    console.log("tenth hint hit");

  });
});


// Format question #1:
    const question1 = document.querySelector("#question1");
    console.log('Question 1: ', question1);
    question1.innerHTML = 'This ' + localStorage.getItem('genre1') + ' is about ' + localStorage.getItem('overview1') + '. Movie tagline: ' + localStorage.getItem('tagline1');

// Format question #2:
    const question2 = document.querySelector("#question2");
    console.log('Question 2: ', question2);
    question2.innerHTML = 'This ' + localStorage.getItem('genre2') + ' is about ' + localStorage.getItem('overview2') + '. Movie tagline: ' + localStorage.getItem('tagline2');

// Format question #3:
    const question3 = document.querySelector("#question3");
    console.log('Question 3: ', question3);
    question3.innerHTML = 'This ' + localStorage.getItem('genre3') + ' is about ' + localStorage.getItem('overview3') + '. Movie tagline: ' + localStorage.getItem('tagline3');

// Format question #4:
    const question4 = document.querySelector("#question4");
    console.log('Question 4: ', question1);
    question4.innerHTML = 'This ' + localStorage.getItem('genre4') + ' is about ' + localStorage.getItem('overview4') + '. Movie tagline: ' + localStorage.getItem('tagline4');

// Format question #5:
    const question5 = document.querySelector("#question5");
    console.log('Question 5: ', question5);
    question5.innerHTML = 'This ' + localStorage.getItem('genre5') + ' is about ' + localStorage.getItem('overview5') + '. Movie tagline: ' + localStorage.getItem('tagline5');

// Format question #6:
    const question6 = document.querySelector("#question6");
    console.log('Question 6: ', question6);
    question6.innerHTML = 'This ' + localStorage.getItem('genre6') + ' is about ' + localStorage.getItem('overview6') + '. Movie tagline: ' + localStorage.getItem('tagline6');

// Format question #7:
    const question7 = document.querySelector("#question7");
    console.log('Question 7: ', question7);
    question7.innerHTML = 'This ' + localStorage.getItem('genre7') + ' is about ' + localStorage.getItem('overview7') + '. Movie tagline: ' + localStorage.getItem('tagline7');
// Format question #1:
    const question8 = document.querySelector("#question8");
    console.log('Question 8: ', question8);
    question8.innerHTML = 'This ' + localStorage.getItem('genre8') + ' is about ' + localStorage.getItem('overview8') + '. Movie tagline: ' + localStorage.getItem('tagline8');

// Format question #9:
    const question9 = document.querySelector("#question9");
    console.log('Question 9: ', question9);
    question9.innerHTML = 'This ' + localStorage.getItem('genre9') + ' is about ' + localStorage.getItem('overview9') + '. Movie tagline: ' + localStorage.getItem('tagline9');

// Format question #10:
    const question10 = document.querySelector("#question10");
    console.log('Question 10: ', question10);
    question10.innerHTML = 'This ' + localStorage.getItem('genre10') + ' is about ' + localStorage.getItem('overview10') + '. Movie tagline: ' + localStorage.getItem('tagline10');