let secretNumber = Math.floor(Math.random() * 10) + 1;

    let guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess === secretNumber) {
      console.log("Correct " + secretNumber);
    } else {
        console.log("<br>");
      console.log("Wrong " + secretNumber);
    }