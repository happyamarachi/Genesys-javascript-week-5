// Accept Student Information
var firstName="Gabriel";
var lastName="Jude";
var subject1Score=25;
var subject2Score=20;
var subject3Score=30;

// Calculate the Total Score
var totalScore= subject1Score + subject2Score + subject3Score;

// Determine the Student's Remark
var remark;

if (totalScore >=70) {
    remark="Excellent";
}else if(totalScore >= 50 && totalScore<=69){
    remark="Good";
}else if(totalScore >=35 && totalScore <=49){
    remark="You can do better";
}else {
   remark= "Fail";
}

// Display the examination Results
console.log("--- Student Examination Result---");
console.log("FullName:" + firstName + "" + lastName);
console.log("Subject 1 Score:" + subject1Score);
console.log("Subject 2 Score:" + subject2Score);
console.log("Subject 3 Score:" + subject3Score);
console.log("Total Score:" + totalScore);
console.log("Remark:" + remark);


// FIZZBUZZ Challenge - Count from 1 - 100
for (let i = 1; i<=100; i++) {

    // Check if divisible by 3 and 5
    if (i % 3 ===0 && i % 5 ===0){
        console.log("FizzBuzz");

        // Check if divisible by 3
    }else if(i % 3===0){
        console.log("Fizz");

        // Check if divisible by 5
    }else if(i % 5){
        console.log("Buzz");

        // If not divisible by both 3 and 5
    }else {
        console.log(i);
    }
}







