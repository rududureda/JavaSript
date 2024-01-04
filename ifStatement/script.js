let age = 20;
let car = 'bmw';
let ageString = '20';

if (age >= 18) {
  console.log('you can vote');
}
if (car == 'bmw') {
  console.log('you are cool');
}

if (age == ageString) {
  console.log('age ans ageString are equal');
}
if (age === ageString) {
  console.log('age ans ageString types are equal');
}

//if,else if,els
let carStatus = 'clean';

if (carStatus != 'dirty') {
  console.log('your car is clean');
} else {
  console.log('your car is dirty');
}

let carColor = 'red';

if (carColor != 'red') {
  console.log('your car is red');
} else if (carColor === 'green') {
  console.log('your car is green');
} else {
  console.log('your car is blue');
}
console.log();
console.log('__________Js5 uzduotys 1/2____________');

let x = 8;
let y = 104;
let z = 10;

if (x === y) {
  console.log('skaiciai yra lygus');
}
if (y === z) {
  console.log('y ir z yra lygus');
}
if (x > y) {
  console.log('x yra didesnis uz y');
}
if (y > z * 2) {
  console.log('y yra didesnis nei z kart 2');
}
if (x % 2 === 0) {
  console.log('skaicius lyginis');
}
if (y % 2 !== 0) {
  console.log('skaicius nelyginis');
}
if (z > 0) {
  console.log('skaicius teigiamas');
}
if (x < 0) {
  console.log('skaicius neigiamas');
}
if (x < 0) {
  console.log('skaicius neigiamas');
}
if (y % 4 === 0) {
  console.log('skaicius dalinasi is 4');
}
if (z % 8 === 0) {
  console.log('skaicius dalinasi is 8');
}
console.log();
console.log('__________Js5 uzduotys 2/2____________');

let metai = 18;
if (metai <= 18) {
  console.log('tu gali balsuoti');
}
console.log();

let a = 10;
let b = 9;
let c = 8;

console.log((10 + 9 + 8) / 3);
if (9 >= 5) {
  console.log('vidurkis teigiamas');
}
console.log();

let d = 10;
let antrKint = 14;
// if(d%5>=1){

// for (let i = 1; i <= 5; i++) {
//   const result = i * d;
//   console.log('{d}*{i}={result}');
// }

if (10 % 2 === 0) {
  console.log('sk lyginis');
}
console.log((d * 2) / 2);

console.log(d + antrKint);
console.log(d - antrKint);
console.log(d * antrKint);
console.log(d / antrKint);

console.log('__________Js5 uzduotys2  1/2____________');

let e = 3;
let f = 8;
let g = 1;

if (e > f) {
  console.log('e didesnis uz f');
} else if (f > g) {
  console.log('f didesnis uz g');
} else if (g > e) {
  console.log('g didesnis uz e');
}

if (e === f) {
  console.log('pirmi skaiciai lygus');
} else if (f === g) {
  console.log('paskutiniai sk lygus');
}

if (e === 0) {
  console.log('e lygus 0');
} else if (f < 0) {
  console.log('skaicius neigiamas');
} else if (g >= 1) {
  console.log('g teigiamas');
}
console.log();
console.log('__________Js5 uzduotys2  2/2____________');

let pazym = 2;

if (pazym === 10) {
  console.log('puiku');
} else if (pazym >= 9) {
  console.log('labai gerai');
} else if (pazym >= 7) {
  console.log(' gerai');
} else if (pazym >= 5) {
  console.log('patenkinamai');
} else if (pazym <= 5) {
  console.log('neislaikyta');
}
console.log();

