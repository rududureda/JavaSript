// let tick = 1;

// switch (tick) {
//   case 1:
//     console.log('vartotojas laimejo vandens');
//     break;
//   case 2:
//     console.log('vartotojas laimejo limonadas');
//     break;
//   case 3:
//     console.log('vartotojas laimejo arbata');
//     break;
//   case 4:
//     console.log('vartotojas laimejo kava');
//     break;

//   default:
//     console.log('nera tokio bilieto');
//     break;
// }

// let a = 2;
// let b = 4;
// let c = 3;
// let sum = 0;

// switch (a) {
//   case 1:
//     sum = a + b + c;
//     console.log(sum);
//     break;
//   case 2:
//     sum = b * c;
//     console.log(sum);
//     break;
//   case 3:
//     sum = c * c;
//     console.log(sum);
//     break;

//   default:
//     console.log(klaida);
//     break;
// }
// let klaida = 'a';
// switch (klaida) {
//   case 'a':
//     console.log('klaida gera');
//     break;
//   case 'b':
//     console.log('klaida puiki');
//     break;
//   case 'c':
//     console.log('klaida bloga');
//     break;
//   default:
//     console.log('nera');
//     break;
// }

const darbVal = 8;
let kepPerVal = 20;
let darbuotoj = 5;
let savikaina = 3;
let kepKaina = 5;
let kepPerDiena = 1000;

console.log('||||||skaiciavimai 1|||||');

let kepPerDienaVisi = darbuotoj * kepPerVal * darbVal;
console.log('darbo dieną spės iškepti duonos', kepPerDienaVisi);

console.log('||||||skaiciavimai 2|||||');

let kepaluSavikaina = kepPerDienaVisi * savikaina;
console.log('kepalu savikaina', kepaluSavikaina);
let gautosPajamos = kepPerDienaVisi * kepKaina;
console.log('gautas pajamas pardavus', gautosPajamos);
let pelnoDalis = gautosPajamos - kepaluSavikaina;
console.log('pelno dalis', pelnoDalis);

console.log('||||||skaiciavimai 3|||||');

if (kepPerDienaVisi > kepPerDiena) {
  console.log('kepykla spės iškepti visus tos dienos užsakymus');
} else if (kepPerDienaVisi < kepPerDiena) {
  console.log(
    'kepykla NEspės iškepti visus tos dienos užsakymus',
    kepPerDienaVisi - kepPerDiena
  );
}
