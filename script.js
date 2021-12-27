// task 1

let num = prompt('write number')
switch (num) {
    case '12':
    case '1':
    case '2':
        alert('winter');
        break;
    case '3':
    case '4':
    case '5':
        alert('spring');
        break;
    case '6':
    case '7':
    case '8':
        alert('summer');
        break;
    case '9':
    case '10':
    case '11':
        alert('autumn');
        break;
    default:
        alert('wrong number');
        break;
}

// task 2

function checkOdd(number) {
    if (number === 0) {
        console.log(`Number ${number} is zero`);

        return;
    }

    if (number % 2 === 0) {
        console.log(`Number ${number} is even`);
    } else {
        console.log(`Number ${number} is odd`);
    }
}

checkOdd(0);

checkOdd(12);

checkOdd(43);

// task 3

console.log("********************************");

function calculate(number, number2, operation) {
    let result;
    if (operation === "+") {
        result = number + number2;
    }
    else if (operation === "-") {
        result = number - number2;
    }
    else if (operation === "*") {
        result = number * number2;
    }
    else if (operation === "/") {
        result = number / number2;
    }
    console.log(`${number} ${operation} ${number2} = ${result}`);
}

calculate(2, 2, "+");

calculate(3, 2, "-");

calculate(4, 4, "*");

calculate(6, 2, "/");
