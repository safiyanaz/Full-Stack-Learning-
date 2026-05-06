const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Technology",
    question: "What does HTML stand for?",
    choices: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    category: "Math",
    question: "What is 7 × 8?",
    choices: ["54", "56", "64"],
    answer: "56"
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    choices: ["Seoul", "Beijing", "Tokyo"],
    answer: "Tokyo"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  }
];

function getRandomQuestion (questions){
  return questions[Math.floor(Math.random() * questions.length)]; 
};


function getRandomComputerChoice(choices){
  
  return choices[Math.floor(Math.random() * 3)]; 
  
}

function getResults(questionObject, compAns){
  if (compAns === questionObject.answer){
    return ("The computer's choice is correct!")
  }else{
    return (`The computer's choice is wrong. The correct answer is: ${questionObject.answer}`)
  };
}

const questionObject = getRandomQuestion(questions);
const compAns = getRandomComputerChoice(questionObject.choices);

console.log(questionObject);
console.log(compAns);
console.log(getResults(questionObject, compAns))
