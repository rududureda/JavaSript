let masina = {
  markė: 'BMW',
  rida: 100000,
  metai: 2010,
  spalva: 'juoda',
  varomi: true,
};

console.log(masina);

for (const key in masina) {
  console.log(key);
  console.log(masina[key]);
}

console.log();
console.log('_________ Objektai 2dalis, uzduotys-1, 11paskaita_______');
console.log();

let knygynas = {
  pavadinimas: 'berzynelio',
  adresas: 'Pakruojo g.',
  plotas: 50,
  kiek_turi_knygų: 200,
  darbo_valandos: 24,
  ar_atidarytas: true,
};
console.log(knygynas);
console.log();

for (const reiksme in knygynas) {
  console.log();
  console.log(reiksme, '-', knygynas[reiksme]);
}
console.log();
console.log('________Visos reiksmes "number"_____');

for (const sk in knygynas) {
  if (typeof knygynas[sk] == 'number') {
    console.log(sk, knygynas[sk]);
  }
}

console.log();
console.log('_________ Objektai 2dalis, uzduotys-2, 11paskaita_______');
console.log();

let FirstStud = {
  vardas: 'Petras',
  pavardė: 'Petraitis',
  studijų_programos: 'JS',
  pavadinimas: 'ilgieji mokymai',
  pažymiai: [8, 9, 4],
};
let sumaF = 0;
let SecStud = {
  vardas: 'Jonas',
  pavardė: 'Jonaitis',
  studijų_programos: 'JS',
  pavadinimas: 'trumpieji mokymai',
  pažymiai: [7, 9, 10],
};
let sumaS = 0;

for (const sumFirst of FirstStud.pažymiai) {
  sumaF += sumFirst;
}
{
  console.log(FirstStud, 'Vidurkis First', sumaF / FirstStud.pažymiai.length);
}

for (const sumSec of SecStud.pažymiai) {
  sumaS += sumSec;
}
{
  console.log(SecStud, 'Vidurkis Sec', sumaS / SecStud.pažymiai.length);
}
//

// console.log(FirstStud[sumaF],sumaF);

// for (const pvz in FirstStud) {
//   console.log(
//     // 'Pirmo studento info-',
//     pvz,
//     FirstStud[pvz],
//     'Pirmo studento vidurkis-',
//     sumaS / SecStud.pažymiai.length
//   );
// }
let First_vid = sumaF / FirstStud.pažymiai.length;
let Sec_vid = sumaS / SecStud.pažymiai.length;

if (First_vid >= Sec_vid) {
  console.log(
    'Mokinys su didziausiu vidurkiu:',
    FirstStud.vardas,
    FirstStud.pavardė
  );
} else
  console.log(
    'Mokinys su didziausiu vidurkiu:',
    SecStud.vardas,
    SecStud.pavardė
  );
