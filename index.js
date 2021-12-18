var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? \n");

console.log("Welcome",userName,"to \'THE MONEY HEIST QUIZ\'\n");
var score = 0;



var questions = [
  {
    question: "1. The Professor’s first name is eventually revealed. What is it? \na) Andres\nb) Aníbal\nc) Sergio\nd) Racquel\n",
    answer: "c"
  },
  {
    question: "2. The show is actually called La Casa de Papel, which literally translates to what? \na) The Paper House\nb) The Outcasts\nc) The House of Outcasts\nd) The House\n",
    answer: "a"
  },
  {
    question: "3. In which country does Raquel track the Professor after the first heist?\na) Philippines\nb) Thailand\nc) China\nd) Malaysia\n",
    answer: "b"
  },
  {
    question: "4. “Let the matriarchy begin”: Whose words are these?\na) Tokyo\nb) Nairobi\nc) Raquel\nd) Professor\n",
    answer:"b"
  }
];

for(var i=0;i<questions.length;i++) {
  var currQues = questions[i];
  var ans = readlineSync.question(currQues.question);
  if(ans === currQues.answer) {
    console.log("right answer\n");
    score++;
  } else {
    console.log("wrong answer\n");
  }

}

console.log("Your final score is",score);



  






