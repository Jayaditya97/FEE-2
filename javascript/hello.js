let num = parseInt(prompt("Enter a number:"));

if (num > 0) {
    document.writeln(num + " is Positive");
} 

else if (num < 0) {
    document.writeln(num + " is Negative");
} 

else {
    document.writeln("The number is Zero");
}

document.writeln("<br>");

for (let i = 1; i <= 20; i++) {
    document.writeln(i + "<br>");
}

let day = parseInt(prompt("Enter a day (1-7):"));

switch (day) {
    case 1:
        document.writeln("Monday");
        break;
    case 2:
        document.writeln("Tuesday");
        break;
    case 3:
        document.writeln("Wednesday");
        break;
    case 4:
        document.writeln("Thursday");
        break;
    case 5:
        document.writeln("Friday");
        break;
    case 6:
        document.writeln("Saturday");
        break;
    case 7:
        document.writeln("Sunday");
        break;
    default:
        document.writeln("Invalid day");
}

