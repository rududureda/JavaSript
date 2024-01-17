// let ciklai = 0;

// while (ciklai < 5) {
//   if (ciklai === 2) {
//     break;
//   }
//   console.log('dab ciklai:', ciklai);
//   ciklai = ciklai + 1;
//   //arba vietoj- ciklai++
// }
// let dociklas = 1;
// do {
//   console.log('do whileciklas:', dociklas);
//   dociklas++;
// } while (7 < 6);
// // do while skiriasi nuo while tuo kad- do while bent 1 karta prasisuks.

console.log();
console.log('____8paskaita 1/3 uzduotis____');
let i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}
let a = 1;
while (a < 10) {
  if (a % 2 === 0) {
    console.log('lyginis', a);
  }
  if (a % 2 !== 0) {
    console.log('nelyginis', a);
  }
  a++;
}
console.log();
console.log('____8paskaita 1/3 uzduotis 4____');

b = 1;
while (true) {
  if (b % 3 === 0 && b % 5 === 0) {
    console.log(b);
    break;
  }
  b++;
}

console.log();
console.log('____8paskaita 1/3 uzduotis 5____');

let d = 1;
let suma = 0;

while (d < 101) {
  if (d % 2 === 0) {
    suma = suma + d;
  }
  d++;
}
console.log(suma);

console.log();
console.log('____8paskaita 2/3 uzduotis 6____');

let sk = 1;
while (sk < 5) {
  console.log(sk, sk * sk);
  sk++;
}

console.log();
console.log('____8paskaita 3/3 uzduotis 7____');

let atsitiktSk = Math.floor(Math.random().toFixed(1) * 10);

while (atsitiktSk < Math.floor(Math.random().toFixed(1) * 20)) {
  console.log(atsitiktSk);
  atsitiktSk++;
}

console.log();
console.log('____8paskaita 3/3 uzduotis 8____');

let atsitiktSkAntras = Math.floor(Math.random().toFixed(1) * 10);

while (atsitiktSkAntras < Math.floor(Math.random().toFixed(1) * 20)) {
  console.log(atsitiktSkAntras, atsitiktSkAntras + atsitiktSkAntras);
  atsitiktSkAntras++;
}

console.log();
console.log('____8paskaita 3/3 uzduotis 9____');

// let suris = 9;
// let duona = 9;
// let vanduo = 9;
// let nupirktaProduct = Math.floor(Math.random() * 10);
// let nupirkDuona = Math.floor(Math.random() * 10);
// let nupirkVnaduo = Math.floor(Math.random() * 10);

// while (nupirktaProduct < suris) {
//   console.log(
//     ' nupirkto surio -',
//     nupirktaProduct,
//     'liko surio -',
//     suris - nupirktaProduct
//   );

//   {
//     if (suris >= nupirktaProduct);
//   }
//   nupirktaProduct++;
// }
// while (nupirkDuona < duona) {
//   console.log(' duonos kiekis-', nupirkDuona);
//   {
//     if (duona >= nupirkDuona);
//   }
//   nupirkDuona++;
// }
// while (nupirkVnaduo < vanduo) {
//   console.log(' vandens kiekis-', nupirkVnaduo);
//   {
//     if (vanduo >= nupirkVnaduo);
//   }
//   nupirkVnaduo++;
// }
// let pirminisSk = 1;

let suris = 9;
let duona = 9;
let vanduo = 9;

while (suris > 0 || duona > 0 || vanduo > 0) {
  console.log(
    'turim surio-',
    suris,
    'turim duonos-',
    duona,
    'turim vandens-',
    vanduo
  );
  let nupirktaProduct = Math.ceil(Math.random() * suris);
  let nupirkDuona = Math.ceil(Math.random() * duona);
  let nupirkVnaduo = Math.ceil(Math.random() * vanduo);
  console.log(
    ' nupirkto surio -',
    nupirktaProduct,
    'nupirko duonos-',
    nupirkDuona,
    'nupirko Vandens',
    nupirkVnaduo
  );

  if (suris) suris -= nupirktaProduct;
  if (duona) duona -= nupirkDuona;
  if (vanduo) vanduo -= nupirkVnaduo;
}

// let pirminisSk = 1;

// while (pirminisSk < 100) {
//   if (
//     pirminisSk > 1 ||
//     pirminisSk / pirminisSk === 1 ||
//     pirminisSk / 1 === pirminisSk
//   ) {
//   }
//   console.log(pirminisSk);
// //   pirminisSk++;
// }
