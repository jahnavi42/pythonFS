let user = new Object();
user.name = "John";
user.surname = "Smith";
delete user.name;
user.name = "Pete";
console.log(user.name);
console.log(user.surname);

obj1 = { one: 1, two: 2, three: 3 };
obj2 = {};
console.log(isObjEmpty(obj1));
console.log(isObjEmpty(obj2));
function isObjEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}


let sal = { a: 2000, b: 3000, c: 4000, };
let sum = 0;
for (let key in sal) {
  sum += sal[key];
}
console.log(sum);

function mergeArrays(arr1, arr2, n1, n2, arr3) {
  let i = 0,
    j = 0,
    k = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) arr3[k++] = arr1[i++];
    else arr3[k++] = arr2[j++];
  }
  while (i < n1) arr3[k++] = arr1[i++];
  while (j < n2) arr3[k++] = arr2[j++];
}

let arr1 = [1, 2, 3, 4, 5, 6];
let n1 = arr1.length;

let arr2 = [8, 174, 20, 11];
let n2 = arr2.length;

let arr3 = Array(n1 + n2).fill(0);

mergeArrays(arr1, arr2, n1, n2, arr3);

for (i = 0; i < n1 + n2; i++) 
console.log(arr3[i] + " ");


function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let n = 6;
a = factorial(n);

console.log("the factorial of n is", a);

function binarySearch(Array, target) {
    let start = 0;
    let end = Array.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (Array[middle] === target) {
            return middle;
        } else if (Array[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return "Not Found";
}

console.log(binarySearch([1, 3, 5, 6, 8, 9, 11, 14, 16],8));

