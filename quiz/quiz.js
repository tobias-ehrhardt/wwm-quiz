(function() {

    
const allQuestions = window.questions;
   
console.log(allQuestions);
    

let timeLeft = 0;
const myQuestions = [];
let askedQuestions = 1;
let timeCount = "";
let numRemove = 0;
let res = false;
    
allQuestions.forEach((difficultyBlock) => {
    myQuestions.push(difficultyBlock[Math.floor(Math.random()*difficultyBlock.length)]);
});
    
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];
      
    document.querySelectorAll(".joker").forEach((j) => {
        j.addEventListener('click', joker);
    });
      
      
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];
      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label class="answer-label">
             <input class="selector" type="radio" name="question${questionNumber}" value="${letter}">
              <span class="nowrap">
              ${letter.toUpperCase()}:
              ${currentQuestion.answers[letter]}
              </span>
             <span class="checkmark"></span>
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           
           <div class="question"><span class="nowrap"> ${questionNumber + 1}. ${currentQuestion.question}</span> </div>
           <div class="answers"> ${answers.join("")} </div>
           
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
    document.querySelectorAll(".selector").forEach((foo) => {
        foo.addEventListener('click',() => {showResults(); askedQuestions += 1; setTimeout(showNextSlide, 5000); document.querySelector("#timer").innerHTML = "";})
    });
  }
  function showResults() { 
   clearInterval(timeCount);
      document.querySelector(".quiz-container").classList.add("checked");
      let joke = document.querySelectorAll(".joker");
        joke.forEach((jok) => {
            jok.classList.add("checked");
        });
      document.querySelector("#abort").classList.add("checked");
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;
      //copies = document.querySelectorAll(".question")[currentSlide].innerHTML;
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      if(questionNumber < askedQuestions) {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
      // if answer is correct
      if (userAnswer == currentQuestion.correctAnswer) {
        // add to the number of correct answers
        
        numCorrect++;
        numRemove = numCorrect + 1;
        // color the answers green
        setTimeout(() => {document.querySelector('.money-row[data-columns="' + numCorrect + '"]').classList.remove("current-row"); 
         document.querySelector('.money-row[data-columns="' + numRemove + '"]').classList.add("current-row");}, 5000);
          
        let answerLabel = answerContainers[questionNumber].querySelectorAll('.selector[value="' + currentQuestion.correctAnswer + '"]');
        answerLabel.forEach((answerL) => { 
            answerL.parentNode.style.backgroundColor = "lightgreen";
        }); 
        setTimeout(() => {const quests = document.querySelectorAll(".question");
        quests[currentSlide].innerHTML = document.querySelector('.money-row[data-columns="' + document.querySelector(".current-row").dataset.columns + '"]').innerHTML;
        quests[currentSlide].style.background = "yellow";}, 100);
      } else {
        // if answer is wrong or blank
        // color the answers red
        let answerLabel = answerContainers[questionNumber].querySelectorAll('.selector[value="' + currentQuestion.correctAnswer + '"]');
        answerLabel.forEach((answerL) => { 
            answerL.parentNode.style.backgroundColor = "lightgreen";
        }); 
        
        const quests = document.querySelectorAll(".question");
        
        setTimeout(() => {quests[currentSlide].innerHTML = "Die Antwort war leider Falsch.";}, 101)
          
          answerContainer.querySelector(selector).parentNode.style.backgroundColor = "yellow";
        
      }
    }
    });
    if (numCorrect == 15) {
        setTimeout(result, 4000);
    }  
    // show number of correct answers out of total
      
    if (numCorrect != askedQuestions) {
        setTimeout(end, 3000);
    }
    
  }

  function showSlide(n) {
      if (currentSlide != 14){
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    timerStart();
    
      }
    
  }
    
    
    
  function showNextSlide() {
      if(res == false){
      if (currentSlide != 14){
    document.querySelector(".quiz-container").classList.remove("checked");
    joke = document.querySelectorAll(".joker");
    joke.forEach((jo) => {
        jo.classList.remove("checked");
    });
    document.querySelector("#abort").classList.remove("checked");
    showSlide(currentSlide + 1);
          document.querySelector(".tel-out").classList.add("hidden");
        document.querySelector(".aud-out").classList.add("hidden");
  }
  }
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");

  buildQuiz();
    
  function displayQuiz(){
      document.querySelector("#abort").classList.remove("hidden");
      document.querySelector("#abort").addEventListener('click', result); 
      document.querySelectorAll(".not-hidden").forEach((notHide) => {
          notHide.classList.add("hidden");
      });
      let hide = document.querySelectorAll(".show");
      hide.forEach((hider) => {
         hider.classList.remove("hidden"); 
      });
  }
    
  function displayEditor() {
        window.location.href = "./list.php";
  }
  // display quiz right away
  document.querySelector("#start").addEventListener('click', displayQuiz);
  document.querySelector("#adder").addEventListener('click', displayEditor);

  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  
    
  function timerStart(){
      if(currentSlide <= 9) {
         timeLeft = 31; 
      } else {
    timeLeft = 61;
      }
    timeCount = setInterval(timer, 1000);
  }

  function timer() {
      if(!document.querySelector(".show").classList.contains("hidden")){
    if(timeLeft == 0){
        clearInterval(timeCount);
        timeUp();
    } else {
        timeLeft -= 1;
        document.querySelector("#timer").innerHTML = timeLeft;
    }
  }
  }
    
  function  timeUp() {
        document.querySelector(".question").innerHTML = "Ihre zeit ist Abgelaufen. Sie Haben verloren."
        let questions = document.querySelectorAll(".answer-label");
        questions.forEach((timeQ) => {
           timeQ.style.backgroundColor = "yellow";
        });
        questions = document.querySelectorAll(".question");
        questions.forEach((timeQ) => {
           timeQ.style.backgroundColor = "yellow";
        });
        setTimeout(result, 4000);
  }
   
  function joker(event){
      if(event.target.classList.contains("fifty")){
          fiftyJ();
      } else if (event.target.classList.contains("tel")){
          telephoneJ();
      } else {
          audienceJ();
      }
  }
 
      const answersArr = ["a", "b", "c", "d"];
      let correctAnswer = myQuestions[currentSlide].correctAnswer;    
  
          
    
  function fiftyJ() {
      
      const answers = document.querySelectorAll(".answers");
      const labels = answers[currentSlide].querySelectorAll(".answer-label");
      correctAnswer = myQuestions[currentSlide].correctAnswer;
      const wrongAnswers = answersArr.filter(answer => answer !== correctAnswer);
      removed = wrongAnswers.splice([Math.floor(Math.random() * wrongAnswers.length)], 1);
      console.log(correctAnswer, wrongAnswers);
      
      labels[answersArr.indexOf(wrongAnswers[0])].innerHTML = `${wrongAnswers[0].toUpperCase()}:`;
      labels[answersArr.indexOf(wrongAnswers[1])].innerHTML = `${wrongAnswers[1].toUpperCase()}:`;
      
      labels[answersArr.indexOf(wrongAnswers[0])].classList.add("not-use");
      labels[answersArr.indexOf(wrongAnswers[1])].classList.add("not-use");
      
      document.querySelector(".fifty").classList.add("joker-used");
  }
  
    
  function telephoneJ() {
      correctAnswer = myQuestions[currentSlide].correctAnswer;
      let correctT = (97 - (currentSlide * 3));
      let telAnswer;
      let randomT = Math.floor(Math.random() * 100);
      
      if(correctT >= randomT) {
         telAnswer = myQuestions[currentSlide].correctAnswer;
      } else {
         const randomAnswers = answersArr.filter(answer => answer !== correctAnswer); 
         telAnswer = randomAnswers[Math.floor(Math.random() * randomAnswers.length)];
      }
      
      const currentAnswer = myQuestions[currentSlide].answers[telAnswer];

      let answerDiff;
      
      if(currentSlide <= 4) {
          answerDiff = 0;
      } else if(currentSlide <= 9) {
          answerDiff = 1;
      } else if(currentSlide <= 13) {
          answerDiff = 2;
      } else {
          answerDiff = 3;
      }
      
      const answersTwo = document.querySelectorAll(".answers");
      const labelsTwo = answersTwo[currentSlide].querySelectorAll(".answer-label");
      
      
      const telephoneAnswers = [
    /*diff1*/[
        {
            telephoneAns: `"...${currentAnswer}!"`  
        },
        {
            telephoneAns: `"Ich bin mir zu 99% sicher, dass es '${telAnswer.toUpperCase()}: ${currentAnswer}' ist." `
        },
        {
            telephoneAns: `Ich kann dir mit ziemlicher Sicherheit sagen, dass es '${telAnswer.toUpperCase()}: ${currentAnswer}' ist."`
        }
    ],
    /*diff2*/[
        {
            telephoneAns: `"Die Frage habe ich schon einmal gehört, und ich bin mir sicher, dass die Antwort darauf '${telAnswer.toUpperCase()}: ${currentAnswer}' war.`  
        },
        {
            telephoneAns: `"Ich bin mir nicht ganz sicher, aber ich glaube, dass die Antwort '${telAnswer.toUpperCase()}: ${currentAnswer}' ist."` 
        },
        {
            telephoneAns: `"Ich denke es ist '${telAnswer.toUpperCase()}: ${currentAnswer}', aber ich will dich nicht in die Irre führen."`
        }
    ],
    /*diff3*/[
        {
            telephoneAns: `"Bei der Frage tappe ich auch im Dunkeln, aber ich würde vermuten, dass es '${telAnswer.toUpperCase()}: ${currentAnswer}' ist."`
        },
        {
            telephoneAns: `"Das ist eine ziemlich schwere Frage, aber es könnte '${telAnswer.toUpperCase()}: ${currentAnswer}' sein."`
        },
        {
            telephoneAns: `"Das ist eine Frage von der ich überhaupt keine Ahnung habe, aber ich würde Antwort '${telAnswer.toUpperCase()}: ${currentAnswer}' nehmen"`
        }
    ],
    /*diff4*/[
        {
            telephoneAns: `"Bei der Frage kann ich auch nur raten, aber ich vermute, dass es '${telAnswer.toUpperCase()}: ${currentAnswer}' ist"`
        },
        {
            telephoneAns: `"Das ist zwar überhaupt nicht mein Gebiet, aber ich vermute, dass es '${telAnswer.toUpperCase()}: ${currentAnswer}' ist"`
        },
        {
            telephoneAns: `"Ich habe überhaupt keine Ahnung, würde aber denken, dass es '${telAnswer.toUpperCase()}: ${currentAnswer}' ist"`
        }
    ]
];
      
      let answerT = telephoneAnswers[answerDiff];
      
      let tOutput = document.querySelector(".tel-out");
      
      tOutput.classList.remove("hidden");
      tOutput.innerHTML = answerT[Math.floor(Math.random() * answerT.length)].telephoneAns;
      
      
      
      document.querySelector(".tel").classList.add("joker-used");
  }
   
  Array.prototype.insert = function (index, item) {
      this.splice(index, 0, item);    
  };
    
  function audienceJ() {
      
      const r = (90 + Math.floor(Math.random() * 10) -(currentSlide * 5));
      
      console.log(r);
      
      const f= (100 - r);
      
      let x1 = (Math.random() * 100);
      let x2 = (Math.random() * 100);
      let x3 = (Math.random() * 100);
      
      let factor = f/(x1 + x2 + x3);
      
      let a1 = Math.round(x1 * factor);
      let a2 = Math.round(x2 * factor);
      let a3 = Math.round(x3 * factor);
      
      if ((a1+a2+a3) !=100){
          a1 + 1;
      }
      
      let percentage = [a1, a2, a3];
      percentage.insert(answersArr.indexOf(correctAnswer), r);
      
      const percentOut = document.querySelectorAll(".out");
      
      const percentBar = document.querySelectorAll(".bar");
      
      percentage.forEach((percent, percentNumber) => {
          percentOut[percentNumber].innerHTML = `${percent}%`;
          percentBar[percentNumber].style.height = `${percent}%`;
      });
      
      document.querySelector(".aud-out").classList.remove("hidden");
      
      
      document.querySelector(".audience").classList.add("joker-used");
  }
    
    
  function end() {
      res = true;
      document.querySelector(".question").innerHTML = "Sie Haben Verloren";
      setTimeout(result, 5000);
  }
    
  function result() {
      clearInterval(timeCount);
      const quests = document.querySelectorAll(".question");
      quests[currentSlide].style.background = "yellow";
      if(document.querySelector(".current-row").dataset.columns <= 5){
          if(document.querySelector(".current-row").dataset.columns == 1){
            const quests = document.querySelectorAll(".question");
          quests[currentSlide].innerHTML = "0€";
          quests[currentSlide].style.background = "yellow";   
          } else{
          const quests = document.querySelectorAll(".question");
          quests[currentSlide].innerHTML = document.querySelector('.money-row[data-columns="' + (document.querySelector(".current-row").dataset.columns - 1) + '"]').innerHTML;
          }
      } else if(document.querySelector(".current-row").dataset.columns <= 10) {
          const quests = document.querySelectorAll(".question");
        quests[currentSlide].innerHTML = "500€";
        quests[currentSlide].style.background = "yellow";
      } else if(document.querySelector(".current-row").dataset.columns <= 14) {
          const quests = document.querySelectorAll(".question");
          quests[currentSlide].innerHTML = "16.000€";
          quests[currentSlide].style.background = "yellow";
      } else {
          const quests = document.querySelectorAll(".question");
        quests[currentSlide].innerHTML = "1.000.000€";
        quests[currentSlide].style.background = "yellow";
      }
      
      
      
      
      
      
      
      document.querySelector("#endb").classList.remove("hidden");
      document.querySelector("#endb").addEventListener('click', reload);
  }   
 
  function reload(){
      location.reload();
  }
    
})();