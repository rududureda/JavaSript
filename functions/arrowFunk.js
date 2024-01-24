//Destitojo pvz:

let defaultFunk = function () {
  return 'Hello, this is default function';
};

let arrowFunk = () => {
  return 'Hello, this is arrow function';
};

console.log(arrowFunk());

console.log();
console.log('_________ funkcijos objektuose uzduotys-1, 14paskaita_______');
console.log();

let darbuotojas = {
  vardas: 'Algis',
  pavarde: 'Algaitis',
  atlyginimas: 1500,
  etatas: 1,
  algos_pakelimas: function (proc) {
    let pakelimas = (proc * darbuotojas.atlyginimas) / 100;
    console.log(
      'Algio alga',
      darbuotojas.atlyginimas,
      ' palekus 20proc -',
      pakelimas + darbuotojas.atlyginimas
    );
  },
};

let etato_keitimas = (pakeistas_etatas) => {
  for (let etatu_array of pakeistas_etatas) {
    if (etatu_array === 0.5) {
      console.log(darbuotojas.atlyginimas * 0.5);
    } else if (etatu_array === 0.75) {
      console.log(darbuotojas.atlyginimas * 0.75);
    } else if (etatu_array === 1) {
      console.log(darbuotojas.atlyginimas * 1);
    } else if (etatu_array === 1.5) {
      console.log(darbuotojas.atlyginimas * 1.5);
    }
  }
};
etato_keitimas([0.75]);
darbuotojas.algos_pakelimas(20);

console.log();
console.log('_________ funkcijos 4 dalis uzduotys-1, 14paskaita_______');
console.log();

let funkcija_atsakymas = () => {
  return 'Mano vardas Barnis';
};
console.log(funkcija_atsakymas());

console.log();
console.log('_________ funkcijos 4 dalis uzduotys-3, 14paskaita_______');
console.log();

let funkcija_studentas = (vardas, vidurkis) => {
  console.log(
    'Studentas',
    vardas,
    'labai gerai mokosi, jo vidurkis -',
    vidurkis
  );
};
funkcija_studentas('Jonas', 9.9);
funkcija_studentas('Tomas', 9.8);

console.log();
console.log('_________ funkcijos 4 dalis uzduotys-4, 14paskaita_______');
console.log();

let maziausias_daliklis = (argumentas) => {
  console.log(argumentas);

  for (let i = 3; i < 45; i++) {
    let maz_daliklis = 0;

    if (argumentas % i === 0) {
      maz_daliklis = i;

      console.log('skaiciaus', argumentas, 'maziausias daliklis', maz_daliklis);
      break;
    }
  }
};
function uz_ribos() {
  for (let z = 10; z <= 30; z++) {
    // console.log(z);
    maziausias_daliklis(z);
  }
}

maziausias_daliklis(45);
uz_ribos();

console.log();
console.log('_________ funkcijos 4 dalis uzduotys-5, 14paskaita_______');
console.log();

let rasti_pirmini_sk = (duotas_sk) => {
  if (duotas_sk % 2 !== 0 && duotas_sk % 3 !== 0) {
    console.log('true');
  } else console.log('false');
};

rasti_pirmini_sk(37);

// console.log();
// console.log('_________ funkcijos 4 dalis uzduotys-6, 14paskaita_______');
// console.log();

// let suma = (x, y) => {
//   console.log(x, '+', y, '=', x + y);
// };
// suma(2, 3);

// let daugyba = (x, y) => {
//   console.log(x, '*', y, '=', x * y);
// };
// daugyba(5, 5);

// let dalyba = (x, y) => {
//   console.log(x, '/', y, '=', x / y);
// };
// dalyba(6, 3);

// console.log(
//   'funkcijoje iskvieciamos,pries tai sukurtos  funkcijos su naujais argumentais.'
// );
// function atsitiktiniai_sk() {
//   let random_pirmas = Math.floor(Math.random() * 10);
//   let random_antras = Math.floor(Math.random() * 10);
//   console.log(random_pirmas, random_antras);
//   suma(random_pirmas, random_antras);
//   daugyba(random_pirmas, random_antras);
//   dalyba(random_pirmas, random_antras);
// }
// atsitiktiniai_sk();

// console.log();
// console.log('_________ funkcijos 5 dalis uzduotys-1, 14paskaita_______');
// console.log();
// let skaiciai = [5, 6, 7, 8, 11, 55];

// let funkcija_masyvas = (array) => {
//   let sumaa = 0;
//   for (let i of array) {
//     sumaa += i;
//   }
//   console.log(sumaa);
// };
// let naujas_masyvas = [2, 66, 5, 3, 12, 8];
// let trumpiausias_masyvas = [22, 55, 33];

// funkcija_masyvas(skaiciai);
// funkcija_masyvas(naujas_masyvas);
// funkcija_masyvas(trumpiausias_masyvas);

// console.log();
// console.log('_________ funkcijos 5 dalis uzduotys-2, 14paskaita_______');
// console.log();

// function ilgiausias_zodis(zodziai) {
//   let ilgiausias = '';

//   for (let i = 0; i < zodziai.length; i++) {
//     if (zodziai[i].length > ilgiausias.length) {
//       ilgiausias = zodziai[i];
//     }
//   }
//   console.log(ilgiausias);
// }

// let zodziai = ['duoma', 'pienasxxxxxx', 'batonas'];
// ilgiausias_zodis(zodziai);

// console.log();
// console.log('_________ funkcijos 5 dalis uzduotys-3, 14paskaita_______');
// console.log();

// let masyvas = [3, 8, 6, 7, 6];
// let masyvas2 = [7, 8, 7, 7, 6];

// let mokymosi_rezultatai = (pazymiai) => {
//   for (let i = 0; i < masyvas.length; i++) {
//     if (pazymiai[i] < 5) {
//       return false;
//     }
//   }
//   return true;
// };

// function ats_konvertavimas() {
//   if (mokymosi_rezultatai(masyvas) === false) {
//     console.log('studentas turi bent vieną neigiamą pažymį');
//   } else console.log('visi studento pažymiai teigiami');
// }
// function ats_konvertavimas2() {
//   if (mokymosi_rezultatai(masyvas2) === false) {
//     console.log('studentas turi bent vieną neigiamą pažymį');
//   } else console.log('visi studento pažymiai teigiami');
// }

// console.log(mokymosi_rezultatai(masyvas));
// ats_konvertavimas();
// console.log(mokymosi_rezultatai(masyvas2));
// ats_konvertavimas2();
