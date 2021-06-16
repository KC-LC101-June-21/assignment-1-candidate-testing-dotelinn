const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  '1) Who was the first American woman in space?',
  '2)True or false: 5 kilometer == 5000 meters?',
  '3) (5 + 3)/2 * 10 = ?',
  "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
  '5) What is the minimum crew size for the ISS?',
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3",
];
let candidateAnswers = [ ];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const input = require('readline-sync');
  candidateName = input.question('Candidate Name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (i = 0; i < questions.length; i++) {
  
  candidateAnswers.push(input.question(questions[i]));
  
  console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Anwser: ${correctAnswers[i]}\n`);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let grade = 0;

  for (i = 0; i < questions.length; i++) {
     if (candidateAnswers[i].toLowercase === correctAnswers[i].toLowercase) {
       grade += 1;
     } else {
       ;
     }
}
  
  if (grade >= 4) {
    console.log(`>>> Overall Grade: ${grade}% (${grade} of 5 responses correct) <<<
>>> Status: PASS <<<`)
  } else {
    console.log(`>>> Overall Grade: ${grade}% (${grade} of 5 responses correct) <<<
>>> Status: FAILED <<<`)
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Greeting candidate: ' + candidateName)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};