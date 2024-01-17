// let gyvunai = ['cat', 'dog', 'mouse'];
// console.log(gyvunai[2]); //atsakymas mouse nes 0,1,2.
// // console.log(gyvunai.length); // length rodo rezultata be 0
// console.log(gyvunai);
// gyvunai[2] = 'rat';
// // gyvunai[3] = 'lion';// po apacia geresnis variantas:
// gyvunai.push('lion', 'tiger'); // reiksmes ides i gala
// console.log(gyvunai);
// console.log('array ilgis:', gyvunai.length); // ats 5, bet indekso sk yra4(nes skaiciuojas 0)

// console.log();

// for (let i = 0; i < gyvunai.length; i++) {
//   console.log(gyvunai[i]);
// }

console.log();
console.log('_________uzduotys 9paskaita_______');

let produktai = ['duona', 'suris', 'vanduo', 'alus', 'pienas'];
console.log(produktai[0]);
console.log(produktai[produktai.length - 1]);
console.log(produktai[2]);
console.log(produktai.length);
console.log(produktai);

// produktai[1] = 'cola';
// produktai[2] = 'fanta';
// produktai[3] = 'pepsi';
// console.log(produktai);

// let tuscias=[];
// tuscias.push('1','2','3','4');
// console.log(tuscias);

console.log();
console.log('_________ 2/2 uzduotys-4, 9paskaita_______');

let skPirm = Math.floor(Math.random() * 10);
let skAnt = Math.floor(Math.random() * 10);
let skTr = Math.floor(Math.random() * 10);

let tusciasAntras = [];
tusciasAntras.push(skPirm, skAnt, skTr);
console.log(tusciasAntras);

console.log();
console.log('_________ 2/2 uzduotys-5, 9paskaita_______');

let pazRedos = [10, 10, 10];
let redosSum = pazRedos[0] + pazRedos[1] + pazRedos[2];
let redosVidurkis = redosSum / pazRedos.length;
console.log('R Pazymiu suma-', redosSum);
console.log('R Pazymiu vidurkis-', redosVidurkis);

let pazOnos = [9, 9, 9];
let onosSum = pazOnos[0] + pazOnos[1] + pazOnos[2];
let onosVidurkis = onosSum / pazOnos.length;
console.log('O Pazymiu suma-', onosSum);
console.log('O Pazymiu vidurkis-', onosVidurkis);

if (redosVidurkis > onosVidurkis) {
  console.log('Redos vidurkis didesnis');
} else {
  console.log('Onos vidurkis didesnis');
}

console.log();

//tiesiog pvz.kuo skiriasi comsole.log t nuo [t]
let paznos = [8, 9, 10];
for (let t = 0; t < paznos.length; t++) {
  console.log('t=', t);
  console.log('[t]=', paznos[t]);
}

console.log();
console.log('_________ 1/4 uzduotys- 6,7,8, 9paskaita_______');

let studijos = ['anglu', 'rusu', 'biologija', 'geografija'];
for (let i = 0; i < studijos.length; i++) {
  console.log('studiju programa', studijos[i]);
}

let projektai = ['mokykla', 'universitetas', 'darbas'];
for (let i = 0; i < projektai.length; i++) {
  console.log(i + 1, '-u', projektai[i]);
}

console.log();
console.log('_________ 2/4 uzduotys- 9, 9paskaita_______');

let skaiciai = [8, 8, 6, 2, 5, 1, 2, 7];
for (let i = 0; i < skaiciai.length; i++) {
  if (i > 5) {
    console.log('sk', [i], 'didesnis uz 5 ');
  }
}

console.log();
console.log('_________ 2/4 uzduotys- 10, 9paskaita_______');

let atsitiktiniaiSk = [
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20),
];
let atsitiktiniuSuma = 0;
console.log('random sk- ', atsitiktiniaiSk);
for (let i = 0; i < atsitiktiniaiSk.length; i++) {
  if (atsitiktiniaiSk[i] % 4 === 0) {
    console.log('sk kurie dalinasi is 4-', atsitiktiniaiSk[i]);
    atsitiktiniuSuma += atsitiktiniaiSk[i];
  }
}
console.log('random sk suma-', atsitiktiniuSuma);

console.log();
console.log('_________ 2/4 uzduotys- 11, 9paskaita_______');

let atsitiktiniaiPazymiai = [
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
];
let pazVidurkis = 0;
console.log('atsitiktiniai pazymiai', atsitiktiniaiPazymiai);
for (let i = 0; i < atsitiktiniaiPazymiai.length; i++) {
  pazVidurkis += atsitiktiniaiPazymiai[i];
  {
    console.log(pazVidurkis);
  }
}
pazVidurkis = pazVidurkis / atsitiktiniaiPazymiai.length;
{
  console.log('galutinis vidurkis', pazVidurkis);
}

console.log();
console.log('_________ 2/4 uzduotys- 12, 9paskaita_______');

let pazymiuMasyvas = [
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
];
let pazMasyvuVidurkis = 0;
console.log('atsitiktiniai pazymiai', pazymiuMasyvas);
for (let i = 0; i < pazymiuMasyvas.length; i++) {
  pazMasyvuVidurkis += pazymiuMasyvas[i];
  {
    console.log(pazMasyvuVidurkis);
  }
}
pazMasyvuVidurkis = pazMasyvuVidurkis / pazymiuMasyvas.length;
{
  console.log('galutinis vidurkis', pazMasyvuVidurkis);
}
if (pazymiuMasyvas[0] > pazMasyvuVidurkis) {
  console.log(
    'pazymis 1-as',
    pazymiuMasyvas[0],
    'yra didesnis uz pazymiu vidurki',
    pazMasyvuVidurkis
  );
}
if (pazymiuMasyvas[1] > pazMasyvuVidurkis) {
  console.log(
    'pazymis 2-as',
    pazymiuMasyvas[1],
    'yra didesnis uz pazymiu vidurki',
    pazMasyvuVidurkis
  );
}
if (pazymiuMasyvas[2] > pazMasyvuVidurkis) {
  console.log(
    'pazymis 3-as',
    pazymiuMasyvas[2],
    'yra didesnis uz pazymiu vidurki',
    pazMasyvuVidurkis
  );
}
if (pazymiuMasyvas[3] > pazMasyvuVidurkis) {
  console.log(
    'pazymis 4-as',
    pazymiuMasyvas[3],
    'yra didesnis uz pazymiu vidurki',
    pazMasyvuVidurkis
  );
}
//nepavyko!!!!!!!!!!!!!!!
// console.log();
// console.log('_________ 3/4 uzduotys- 13, 9paskaita_______');
// console.log();

// let vaikuAmzius = [2, 5, 4, 3, 6];

// for (let i = 0; i < vaikuAmzius.length; i++) {
//   console.log(vaikuAmzius[i]);
//   if (vaikuAmzius[i] % 2 === 0)(
//   skKvatratas = vaikuAmzius[i] * vaikuAmzius[i])
//   console.log(
//     'Darzelio vaiku amzius',
//     vaikuAmzius[i],
//     'sk kvatratas',
//     skKvatratas
//   );
// }

console.log();
console.log('_________ 3/4 uzduotys- 14, 9paskaita_______');
console.log();

let studentPaz = [10, 9, 10, 2, 7];

for (let i = 0; i < studentPaz.length; i++) {
  if (studentPaz[i] >= 4) {
    console.log(studentPaz[i], 'pazymys teigiamas');
  } else {
    console.log(
      studentPaz[i],
      'pazymys neigiami',
      ',iki teigiamo pazymio truko',
      4 - studentPaz[i]
    );
  }
}

console.log();
console.log('_________ 4/4 uzduotys- 15, 9paskaita_______');
console.log();

let zodziai = ['reda', 'ona', 'marija', 'aldona'];

for (let i = 0; i < zodziai.length; i++) {
  console.log(zodziai[i], zodziai[i].length);
  masyvoRaidziuKiekis =
    zodziai[0].length +
    zodziai[1].length +
    zodziai[2].length +
    zodziai[3].length;
}
{
  console.log('Visos masyvo raidziu kiekis', masyvoRaidziuKiekis);
}

console.log();
console.log('_________ 4/4 uzduotys- 16, 9paskaita_______');
console.log();

///////Nepavyko

// let skDalinasiIsTrieju = [9, 2, 5, 6, 12];
// let skSuma = 0;
// let skVidurkis = 0;
// for (let i = 0; 1 < skDalinasiIsTrieju.length; i++) {
//   if (skDalinasiIsTrieju[i] % 3 === 0) {
//     console.log('dalinasi is 3-', skDalinasiIsTrieju[i]);
//     skSuma += skDalinasiIsTrieju[i];
//     console.log('sk Suma', skSuma);
//   }
// }
//________________
// skVidurkis = skSuma / skDalinasiIsTrieju.length;
// console.log(skVidurkis);

// }
// {
//   console.log('sk Suma-', skSuma, 'sk Vidurkis', skVidurkis);
// }
// }
