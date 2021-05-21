console.log("Week 4 homework");

console.log("Display in the console the numbers from 1 to 20.")
for (let i = 1; i <= 20; i++) { console.log(i) }

console.log("Display in the console the odd numbers from 1 to 20.")
for (let i = 1; i < 20; i += 2) {
    console.log(i);
}

console.log("Compute the sum of the elements of an array and display it in the console.")
var arr = [1, 2, 3, 4]
var sum = 0;
for (let i = 0; i < arr.length; i++) { sum += arr[i]; }
console.log(sum);

console.log("Compute the maximum of the elements of an array and display it in the console.")
const array = [1, 2, 3, 4, 5, 6, 7, 66, 55];
const maxArray = (values) => {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (values[i] > max) {
            max = values[i]
        }
    }
    return max;
}
console.log(maxArray(array));

console.log("Compute how many times a certain element appears in an array.")
var arr = [];
var count = 0;
function find(arr, number) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            count++;
        }
    }
    return count;
}
console.log(find([1, 2, 1, 3], 1));

console.log("Using nested control structures (for, while), generate the following pattern.");

var pattern = "";
var index1 = 0;
var index2 = 0;
var positionType;
for (index1 = 0; index1 < 4; index1++) {
    let positionType = index1 % 2 == 0;
    for (index2 = 0; index2 < 4; index2++) {
        if (index2 % 2 !== 0) { pattern += positionType ? "1 " : "0 " }
        else { pattern += positionType ? "0 " : "1 " }
    } if (index1 < 3) { pattern = pattern + "\n" }
}
console.log(pattern);
