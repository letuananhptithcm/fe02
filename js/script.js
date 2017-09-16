var a = {
    thuocTinhA: "This is property A",
    thuocTinhB: "This is property B",
    thuocTinhC: "This is property C",
    thuocTinhD: "This is property D",
    thuocTinhE: "This is property E",
    thuocTinhF: "This is property F",
    thuocTinhG: "This is property G",
};

function print(message) {
    var name = prompt("Enter your name : ", "");
    var email = prompt("Enter your email : ", "");
    console.log("You have entered : " + name + " Email: " + email);
}

function congHaiSo(thamSo1, thamSo2, callback) {
    var result = thamSo1 + thamSo2;
    callback(result);
}

// congHaiSo(5, 4, print);

var text = "Hello world !";
var i = 0;
while(i < text.length) {
    document.writeln("text.charAt(" + i + ") is:" + text.charAt(i) + "<br>");
    i++;
}
document.writeln(text.slice(2, 10) + "<br>");
var arrayResult = text.split(" ");
for(var i = 0; i < arrayResult.length; i++) {
    document.writeln(i + "." + arrayResult[i] + "<br>");
}
var subResult = text.substr(6, 3);

document.writeln(subResult + "<br>");
document.writeln(text.substring(3, 10) + "<br>");

var array = [ "Pink", "Yellow", "Black" ];
var arrayConcat = array.concat([ "White", "Normal" ]);

document.write("Array concat result : " + arrayConcat );

var numberArray = [1, 2, 3, 10, 20, 11, 75, 100];

var result = numberArray.filter(moreThan10);

function moreThan10(element, index, array) {
    return (element > 10);
}

for(var i = 0; i < numberArray.length; i++) {

}

// console.log(numberArray.join(" ### "));

var resultForEach = []

numberArray.forEach(function(element, index, array) {
    if(element < 10) {
        resultForEach.push(Math.sqrt(element));
    } else {
        resultForEach.push(element);
    }
});

console.log(resultForEach);

var resultMap = numberArray.map(function(value, index, array) {
    if(value < 10) {
        value = Math.sqrt(value);
    }
    return value;
});

console.log(resultMap);

var total = numberArray.reduce(function(a, b){ 
    return a + b; 
});

/**
 * array.push: import last position
 * array.pop: export last position
 * array.shift: export first position
 * array.unshift: import first position
 */

var so20 = numberArray.splice(4, 2);
console.log(so20);

var today = new Date();
var numberRandom = Math.random();

function randomNumber(number) {
    return Math.floor((Math.random() * 10000) % number + 1);
}


var a = [ 1, 5, 5, 1, 7, 10, 9, 4 ];
var b = [ 1, 5, 1, 10, 22, 22, 19, 7, 3];

var c = a.concat(b);
c.sort();