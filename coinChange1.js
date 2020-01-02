function coinChange(num) {
    var remainder = 0;
    var str = '';
    var counter = 0;
    var dollars = 0; var quarters = 0; var dimes = 0; var nickels = 0; var pennies = 0;
    if (num <= 0) {
        return console.log("Number has to be greater than zero.");
    }

    if (typeof num === "object") {
        pennies = num["dollars"] * 100 + num["dimes"] * 10 + num["pennies"];
        console.log(pennies);
    }
    num = pennies;
    console.log(num);

    while (num > 99) {
        num = num - 100;
        counter++;
    }
    if (counter > 0) { str += ' dollars: ' + counter; counter = 0; }
    while (num > 24) {
        num = num - 25;
        counter++;
    }
    if (counter > 0) { str += ' quarters: ' + counter; counter = 0; }
    while (num > 9) {
        num = num - 10;
        counter++;
    }
    if (counter > 0) { str += ' dimes: ' + counter; counter = 0; }
    while (num > 4) {
        num = num - 5;
        counter++;
    }
    if (counter > 0) { str += ' nickles: ' + counter; counter = 0; }
    while (num > 0) {
        num = num - 1;
        counter++;
    }
    if (counter > 0) { str += ' pennies: ' + counter; counter = 0; }

    return str;
}
var a = coinChange({ dollars: 2, dimes: 15, pennies: 5 });
// var a = coinChange(340);
console.log(a);