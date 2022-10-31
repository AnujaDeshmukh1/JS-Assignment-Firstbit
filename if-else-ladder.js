let marks = prompt("Enter marks: ");

if (marks < 40) {
    console.log("Yo are Failed");
}

else if (marks >= 40 && marks <= 60) {
  console.log("Pass grade");
}

else if (marks >= 60 && marks <= 70) {
    console.log("B Grade");
}

else if (marks >= 70 && marks <=90) {
    console.log("A Grade");
}

else if (marks >= 90 && marks <= 100) {
    console.log("A+ Grade");
}

else {
    console.log("Best Of Luck!");
}