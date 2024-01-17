let student = {
  vardas: 'Reda',
  kursas: 'JavaScript',
  metai: 2023,
  sodra: true,
  pazymiai: [2, 5, 1, 4],
};

student.kursas = 'Node.js'; //Pakeisim pirmine reiksme

console.log(student.kursas, student.metai);
console.log(student);
console.log(student.pazymiai.length);

//vietoj sringu yra objektai
const student1 = [
  {
    vardas: 'Reda',
    kursas: 'JavaScript',
    metai: 2023,
    sodra: true,
    pazymiai: [2, 5, 1, 4],
  },
  {
    vardas: 'Reda',
    kursas: 'JavaScript',
    metai: 2023,
    sodra: true,
    pazymiai: [2, 5, 1, 4],
  },
];

console.log();
console.log('_________ Objektai uzduotys-1, 11paskaita_______');
console.log();

let studentas = {
  vardas: 'Reda',
  pavardė: 'Rancaite',
  amžius: 28,
  studijos: 'JS',
};
console.log(studentas);

console.log(studentas.amžius);
console.log(studentas.pavardė);

console.log();
console.log('_________ Objektai uzduotys-2, 11paskaita_______');
console.log();

let filmas = {
  pavadin: 'Undinele',
  režisierius: 'Ramutis',
  biudžetas: 20000000,
  uždirbo_pinigų_po_išleidimo: 50000000,
  žanras: 'siaubo',
  trukmė: 120,
  išleidimo: 2015,
  aktorių_sąrašas: [
    { vard: 'asta', pav: 'Petrauskiene' },
    { vard: 'Ona', pav: 'Katrauskiene' },
  ],
};

console.log(filmas);
console.log(
  'Filmo pelnas',
  filmas.uždirbo_pinigų_po_išleidimo - filmas.biudžetas
);
console.log('Filme dalyvave aktoriai', filmas.aktorių_sąrašas.length);

console.log(
  'Filmui yra metu:',
  new Date(Date.now()).getFullYear() - filmas.išleidimo
);

console.log();
console.log('_________ Objektai uzduotys-3, 11paskaita_______');
console.log();

let knygaFirst = {
  kaina: 9,
  puslapių_kiekis: 200,
  knygą_galima_rasti_knygynuose: true,
  skyrių_sąrašas: [1, 2, 3],
};

let knygaSec = {
  kaina: 20,
  puslapių_kiekis: 250,
  knygą_galima_rasti_knygynuose: false,
  skyrių_sąrašas: [1, 2, 3, 4],
};

console.log('info-', knygaFirst, knygaSec);
if (knygaFirst.puslapių_kiekis < knygaSec.puslapių_kiekis) {
  console.log('Pirma knyga plonesne');
} else {
  console.log('Antra knyga plonesne');
}

if (knygaFirst.skyrių_sąrašas.length > knygaSec.skyrių_sąrašas.length) {
  console.log('Pirma knyga turi daugiau skyriu');
} else {
  console.log('Antra knyga turi daugiau skyriu');
}

if (knygaFirst.kaina * 2 > knygaSec) {
  console.log(
    'pirmos knygos kainą padvigintumėte,ji būtų brangesnė už Antra knygą'
  );
} else {
  console.log(
    'pirmos knygos kainą padvigintumėte,ji nebutu brangesnė už Antra knygą'
  );
}

console.log();
console.log('_________ Objektai uzduotys-4, 11paskaita_______');
console.log();

let PrekePirma = {
  etiket_Pav: 'Batonas',
  kaina: 2,
  savikaina: 1,
  kiekis_Sand: 10,
  dėžės_matmenys: [2, 4, 8],
};
let PrekeAntra = {
  kaina: 3,
  etiket_Pav: 'Braskes',
  savikaina: 2,
  kiekis_Sand: 11,
  dėžės_matmenys: [3, 6, 12],
};

let PrekeTrecia = {
  etiket_Pav: 'Vynuoges',
  kaina: 5,
  savikaina: 3,
  kiekis_Sand: 13,
  dėžės_matmenys: [4, 8, 16],
};

console.log(
  'pirma prekė kainuoja',
  PrekePirma.kaina,
  ' antra prekė kainuoja -',
  PrekeAntra.kaina,
  ' trecia prekė kainuoja -',
  PrekeTrecia.kaina
);
if (
  (PrekePirma.kaina > PrekeAntra.kaina, PrekePirma.kaina > PrekeTrecia.kaina)
) {
  console.log('Pirma preke brangiauia', PrekePirma);
}
if (
  (PrekeAntra.kaina > PrekePirma.kaina, PrekeAntra.kaina > PrekeTrecia.kaina)
) {
  console.log('antra preke brangiauia', PrekeAntra);
}
if (
  (PrekeTrecia.kaina > PrekeAntra.kaina, PrekeTrecia.kaina > PrekePirma.kaina)
) {
  console.log('Trecia preke brangiauia', PrekeTrecia);
}

console.log();

console.log(
  'Pirmos prekes pelningumas',
  (PrekePirma.kaina - PrekePirma.savikaina) * PrekePirma.kiekis_Sand
);
console.log(
  'Antros prekes pelningumas',
  (PrekeAntra.kaina - PrekeAntra.savikaina) * PrekeAntra.kiekis_Sand
);

console.log(
  'Trecios prekes pelningumas',
  (PrekeTrecia.kaina - PrekeTrecia.savikaina) * PrekeTrecia.kiekis_Sand
);

console.log();

console.log(
  'Pirmos prekes dėžės tūris',
  PrekePirma.dėžės_matmenys[0] *
    PrekePirma.dėžės_matmenys[1] *
    PrekePirma.dėžės_matmenys[2]
);
console.log(
  'Antros prekes dėžės tūris',
  PrekeAntra.dėžės_matmenys[0] *
    PrekeAntra.dėžės_matmenys[1] *
    PrekeAntra.dėžės_matmenys[2]
);

console.log(
  'Trecios prekes dėžės tūris',
  PrekeTrecia.dėžės_matmenys[0] *
    PrekeTrecia.dėžės_matmenys[1] *
    PrekeTrecia.dėžės_matmenys[2]
);

console.log();
console.log('_________ Objektai uzduotys-5, 11paskaita_______');
console.log();

let automobilis = {};

automobilis.markė = 'BMW';
automobilis.rida = 100000;
automobilis.metai = 2010;
automobilis.spalva = 'juoda';
automobilis.darbinis_tūris = 12;
automobilis.ar_daužt = true;
automobilis.ar_parduodama = false;

console.log(automobilis);

// console.log(
//   'Automobilui yra',
//   new Date(Date.now()).getFullYear() - automobilis.metai,
//   'metu senumo'
// );
// console.log('Automobilis per metus nuvaziuoja',automobilis.rida/14);

// arba galimas toks sprendimas

if ((i = new Date(Date.now()).getFullYear() - automobilis.metai)) {
  console.log('Automobilui yra', i, 'metu senumo');
  console.log('Automobilis per metus nuvaziuoja', automobilis.rida / i,'km.');
}

