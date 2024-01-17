let x = 8;
let y = 2;
let hasCar = false;

if (x < 10) {
  if (y > 1) {
    console.log('code good');
  }
}
if (x < 10 && y > 1) {
  console.log('code good with&&');
}
if (x < 10 || y > 1) {
  console.log('code good with ||');
}
if (hasCar === false) {
  console.log('would you like to buy a car');
}
if (!hasCar) {
  console.log('would you like to buy a car');
}

//savaranki6ka uzduotis
console.log();

let a = 1;
let b = 2;
let c = 3;

if (a > b && a > c) {
  console.log('a is biggest');
} else if (b > a && b > c) {
  console.log('b is biggest');
} else if (c > b && c > a) {
  console.log('c is biggest');
}

if (a < b && a < c) {
  console.log('a is smallest');
} else if (b < a && b < c) {
  console.log('b is smallest');
} else if (c < b && c < a) {
  console.log('c is smallest');
}

let d = 5;
let e = 5;
let f = 5;
let vidurkis = (d + e + f) / 3;

if (vidurkis >= 8) {
  console.log('vidurkis {8-10}');
} else if (vidurkis >= 5 && vidurkis < 8) {
  console.log('vidurkis {5-8}');
} else if (vidurkis < 5) {
  console.log('vidurkis {<5}');
}

let n = 6;
let m = 7;

if (n > m || n === 0) {
  console.log('n value ||');
}
if (m > n || m === 5) {
  console.log('m value ||');
}
if (n > m && n === 20) {
  console.log('n value &&');
}
if (m > n && m < 100) {
  console.log('m value &&');
}
