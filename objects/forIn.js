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

console.log();
console.log('_________ Objektai 4dalis, uzduotys-1, 12paskaita_______');
console.log();

let knygos = [
  { pavadinimas: 'Sienguole', kaina: 5.99, parduota: 50 },
  { pavadinimas: 'Bebras', kaina: 7.99, parduota: 80 },
  { pavadinimas: 'meile', kaina: 12.99, parduota: 110 },
];

console.log(knygos);

console.log(); //arba

for (const knyga of knygos) {
  console.log(knyga);
}

console.log();

console.log(knygos[0]);
console.log('Pirmos knygos kaina', knygos[0].kaina);

console.log();
console.log('_________ Objektai 4dalis, uzduotys-2, 12paskaita_______');
console.log();

let prekes = [
  { Prek_pav: 'braskes', Prek_kaina: 6.29, Prek_kiekis: 30 },
  { Prek_pav: 'bananai', Prek_kaina: 8.29, Prek_kiekis: 340 },
  { Prek_pav: 'persikai', Prek_kaina: 12.29, Prek_kiekis: 70 },
];
console.log(
  prekes[0].Prek_pav,
  '\n',
  prekes[0].Prek_kaina,
  '\n',
  prekes[1].Prek_pav,
  '\n',
  prekes[1].Prek_kaina,
  '\n',
  prekes[2].Prek_pav,
  '\n',
  prekes[2].Prek_kaina
);
console.log();

console.log();
console.log('_________ Objektai 4dalis, uzduotys-3, 12paskaita_______');
console.log();

let auto = [
  { auto_pav: 'BMW', metai: 2023, rida: 50000 },
  { auto_pav: 'audi', metai: 2020, rida: 200000 },
  { auto_pav: 'toyota', metai: 2000, rida: 70000 },
];
let snd_metai = new Date(Date.now()).getFullYear();

console.log(
  auto[0].auto_pav,
  auto[0].metai,
  ',masinos amzius',
  snd_metai - auto[0].metai,
  'metai',
  '\n',
  auto[1].auto_pav,
  auto[1].metai,
  ',masinos amzius',
  snd_metai - auto[1].metai,
  'metai',
  '\n',
  auto[2].auto_pav,
  auto[2].metai,
  ',masinos amzius',
  snd_metai - auto[2].metai,
  'metai'
);
console.log();
console.log('_________ Objektai 5dalis, uzduotys-1, 12paskaita_______');
console.log();

let imones = [
  { im_pav: 'draugas', im_darbuotojai: 14, im_pelnas: 50 },
  { im_pav: 'Zvirbloniai', im_darbuotojai: 40, im_pelnas: 100 },
  { im_pav: 'Balsiai', im_darbuotojai: 8, im_pelnas: 4000 },
];

let im_suma = 0;

console.log(
  'ZUB',
  imones[0].im_pav,
  ',sioja imoneje dirba',
  imones[0].im_darbuotojai,
  'darbuotoju',
  ',imone per metus gauna',
  imones[0].im_pelnas,
  'tukstanciu pelna.'
);
console.log(
  'ZUB',
  imones[1].im_pav,
  ',sioja imoneje dirba',
  imones[1].im_darbuotojai,
  'darbuotoju',
  ',imone per metus gauna',
  imones[1].im_pelnas,
  'tukstanciu pelna.'
);
console.log(
  'ZUB',
  imones[2].im_pav,
  ',sioja imoneje dirba',
  imones[2].im_darbuotojai,
  'darbuotoju',
  ',imone per metus gauna',
  imones[2].im_pelnas,
  'tukstanciu pelna.'
);

for (const pelnas of imones) {
  im_suma += pelnas.im_pelnas;
}
console.log(
  'Dukteiniu imoniu bendras pelnas',
  Math.round(im_suma / imones.length),
  'tukstanciu per metus.'
);

console.log();
console.log('_________ Objektai 5dalis, uzduotys-2, 12paskaita_______');
console.log();

let ligonine = [
  { lig_pav: 'zirnelis', lig_adresas: 'berzynelio g.61A', lig_lovos: 43 },
  { lig_pav: 'centrine', lig_adresas: 'suomijos g.71A', lig_lovos: 400 },
  { lig_pav: 'respublikine', lig_adresas: 'azuolyno g.6B', lig_lovos: 283 },
];

let lig_suma = 0;
console.log(
  'Lietuvos ligonine',
  ligonine[0].lig_pav,
  ',adresas:',
  ligonine[0].lig_adresas,
  '\n',
  'Lietuvos ligonine',
  ligonine[1].lig_pav,
  ',adresas:',
  ligonine[1].lig_adresas,
  '\n',
  'Lietuvos ligonine',
  ligonine[2].lig_pav,
  ',adresas:',
  ligonine[2].lig_adresas
);

for (const lovos of ligonine) {
  lig_suma += lovos.lig_lovos;
}
console.log('Ligoninese vienu metu gali buti paguldyta', lig_suma, 'ligoniu');

console.log();
console.log('_________ Objektai 6dalis, uzduotys-1, 12paskaita_______');
console.log();

let studentai = [
  { vardas: 'agniete', pavarde: 'Agnis', amzius: 24, pazymiai: [10, 2, 8, 9] },
  { vardas: 'Ona', pavarde: 'onaite', amzius: 20, pazymiai: [6, 2, 3, 9] },
  {
    vardas: 'Petras',
    pavarde: 'Petraitis',
    amzius: 22,
    pazymiai: [7, 8, 4, 5],
  },
];

for (let i = 0; i < studentai.length; i++) {
  let paz_suma = 0;
  console.log(studentai[i].pazymiai);

  for (const paz of studentai[i].pazymiai) {
    // console.log(paz);
    paz_suma += paz;
    console.log(paz_suma);
  }
  studentai[i].vidurkis = paz_suma / studentai[i].pazymiai.length;
  console.log(studentai[i].vidurkis);
  // studentai[i].data = new Date(Date.now()).getFullYear();
}
console.log('______________________________________________');
console.log(
  studentai[0].vardas,
  studentai[0].pavarde,
  studentai[0].amzius,
  '\n',
  studentai[0].pazymiai,
  '\n',
  'pažymių vidurkis',
  studentai[0].vidurkis
);
console.log(
  studentai[1].vardas,
  studentai[1].pavarde,
  studentai[1].amzius,
  '\n',
  studentai[1].pazymiai,
  '\n',
  'pažymių vidurkis',
  studentai[1].vidurkis
);
console.log(
  studentai[2].vardas,
  studentai[2].pavarde,
  studentai[2].amzius,
  '\n',
  studentai[2].pazymiai,
  '\n',
  'pažymių vidurkis',
  studentai[2].vidurkis
);

console.log('______________________________________________');
console.log(
  'Studentu pazymiu vidurkis',
  (studentai[0].vidurkis + studentai[1].vidurkis + studentai[2].vidurkis) /
    studentai.length
);

console.log();
console.log('_________ Objektai 6dalis, uzduotys-2, 12paskaita_______');
console.log();

let parduotuve = {
  pard_pav: '"ciauciau"',
  pard_adresas: 'Dariaus ir Gyreno g.',
  pard_darbuotojai: 8,
  preke: [
    {
      Vardenis: 'telefonas',
      kodas: 12205,
      kain: 20.99,
      savikaina: 10.99,
      kiekis: 50,
    },
    {
      Vardenis: 'rankine',
      kodas: 55505,
      kain: 50.99,
      savikaina: 40.99,
      kiekis: 20,
    },
  ],
};
console.log(
  'Parduotuves bendra informacija: ',
  parduotuve.pard_pav,
  parduotuve.pard_adresas,
  parduotuve.pard_darbuotojai,
  ' turimos prekes:',
  '\n',
  parduotuve.preke[0].Vardenis,
  parduotuve.preke[0].kain,
  '\n',
  parduotuve.preke[1].Vardenis,
  parduotuve.preke[1].kain
);
console.log(
  'Parduotuvė turi visų prekių',
  parduotuve.preke[0].kiekis + parduotuve.preke[1].kiekis,
  'vnt'
);
if (parduotuve.preke[0].kiekis > parduotuve.preke[1].kiekis) {
  console.log('Telefonu parduotuve turi daugiausia, o rankiniu maziausiai');
} else console.log('Rankiniu parduotuve turi daugiausia,o telefonu maziausiai');
