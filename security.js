var securityQuestions = {
    question: ["What is the best city in the world?","What is the President's last name?", "How many states are in the United States?"],
    expectedAnswer: ["san francisco", "obama", "50"]
};

var i = 0;

while (i<securityQuestions.question.length) {

var userInput = prompt(securityQuestions.question[i]);
    if (userInput !== securityQuestions.expectedAnswer[i]) {
        alert("Wrong answer, goodbye!")
        break;
    } 
    else {
        i = i+1; 
    }

   

}

//console.log("Answer: "+userInput);

