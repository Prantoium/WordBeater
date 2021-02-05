
window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
const currentLevel = levels.medium;
let time = currentLevel;
let score = 0;
let gamePlaying;


const displayWords = document.querySelector("#current-word");
const displayTyping = document.querySelector("#word-input");
const timeLeft = document.querySelector("#time");
const displayScore = document.querySelector("#score");
const displayHighScore = document.querySelector("#highscore");
const displayTime= document.querySelector("#seconds")
const displayMessage = document.querySelector("#message");

const words = [
  "Hat",
  "river",
  "Lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "Joke",
  "developer",
  "Establishment",
  "hero",
  "javascript",
  "Nutrition",
  "Revolver",
  "Echo",
  "siblings",
  "investigate",
  "Horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "Pranto",
  "definition",
  "Explanation",
  "inertia",
  "Synonyms",
  "pushover",
  "pandemic",
  "misspelled",
  "interesting",
  "thousand",
  "advanced",
  "register",
  "scrabble",
  "information ",
  "Picture",
  "Craftsman",
  "pronunciation",
  "Dictionary",
  "translation",
  "Xylan",
  "xenon",
  "zonation",
  "Yielding ",

  "yearning",
];

function init(params) {
     displayTime.innerHTML = currentLevel;
    showWord(words);
    setInterval(countDown, 1000);
    setInterval(checkGameStatus, 100);
    displayTyping.addEventListener("input", startGame);
    
    
    

}
function showWord(words) {
    const randomWord = Math.floor(Math.random() * words.length);
    displayWords.innerHTML = words[randomWord]; 
}

function countDown(params) {
    if (time > 0) {
        time--;
    }
    else if (time === 0) {
        gamePlaying = false;
    }
    timeLeft.innerHTML = time;
}
function checkGameStatus(params) {
    if (!gamePlaying && time === 0) {
        displayMessage.innerHTML = "Game Over!";
        score = -1;
     }
}

function startGame(params) {
  if (matchWords()) {
    gamePlaying = true;
    time = currentLevel + 1;
    showWord(words);
    displayTyping.value = "";
    score++;
    }
    
  if (
      sessionStorage["highscore"] === "undefined" ||
    score > sessionStorage["highscore"]
  ) {
    sessionStorage["highscore"] = score;
  } else {
    sessionStorage["highscore"] = sessionStorage["highscore"];
  }

 
  if (sessionStorage["highscore"] >= 0) {
   displayHighScore.innerHTML = sessionStorage["highscore"];
  }

  if (score === -1) {
    displayScore.innerHTML = 0;
  } else {
    displayScore.innerHTML = score;
  }
}
function matchWords(params) {
    if (displayTyping.value===displayWords.innerHTML) {
        displayMessage.innerHTML = "Correct!";
        return true;
    }
    else {
        displayMessage.innerHTML = "";
        return false;  
        
    }
}

// function highScoreOfGame() {
//   if (highScore !== null) {
//     if (score > highScore) {
//       localStorage.setItem("highScore", score);
//     }
//   } else {
//     localStorage.setItem("highScore", score);
//   }
    
// }
