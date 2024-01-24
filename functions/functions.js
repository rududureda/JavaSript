function veiksmas(x, y) {
  return x - y;
}
let rezultatas1 = veiksmas(2, 3);
let rezultatas2 = veiksmas(5, 3);

console.log(rezultatas1);
console.log(rezultatas2);

// let result = 2 + 2;
// console.log(result);

// let result2 = 4 + 2;
// console.log(result2);

// let result3 = 8 + 2;
// console.log(result3);

console.log();
console.log('_________  uzduotys-1, 12paskaita_______');
console.log();

function ID() {
  console.log('Reda');
  console.log('Rancaite');
}

ID();
ID();
ID();

console.log();
console.log('_________  uzduotys-2, 12paskaita_______');
console.log();

function eilerastis() {
  console.log(
    'Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį.\n Iškvieskite šią funkciją 5 kartus'
  );
}
for (let i = 0; i < 5; i++) {
  eilerastis();
}

console.log();
console.log('_________  uzduotys-3, 12paskaita_______');
console.log();
//Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite visas tris funkcijas po vieną kartą.

function pirma() {
  console.log('Labas');
}
function antra() {
  console.log('viso gero');
}
function trecia() {
  console.log('labos nakties');
}
pirma();
antra();
trecia();

console.log();
console.log('_________  uzduotys-4, 12paskaita_______');
console.log();

function pirma() {
  console.log('Labas');
}
function antra() {
  console.log('viso gero');
}
function trecia() {
  pirma();
  antra();
}

trecia();

console.log();
console.log('_________  uzduotys-5, 12paskaita_______');
console.log();

function skaiciai() {
  let skPirmas = Math.floor(Math.random() * 10);
  let skAntras = Math.floor(Math.random() * 10);
  console.log(skPirmas, '+', skAntras, '=', skPirmas + skAntras);
}
skaiciai();
skaiciai();
skaiciai();

console.log();
console.log('_________  uzduotys-6, 12paskaita_______');
console.log();

function policininkas() {
  let vardas = 'algis';
  let pavarde = 'algaitis';
  let amzius = '70';
  let etatas = 0.5;
  let specializacija = 'Kriminalistai';
  console.log(
    'Darbuotojas',
    vardas,
    pavarde,
    amzius,
    ' m., kadangi',
    vardas,
    'jau pencininkas, jis dirba tik',
    etatas,
    'etato,jis yra-',
    specializacija
  );
}
policininkas();

console.log();
console.log('_________ dalis-1, uzduotys-7, 12paskaita_______');
console.log();

function daugSk() {
  let randSk = Math.floor(Math.random() * 10);
  return randSk;
}
function daugSk10() {
  let arry = [];
  for (let m = 0; m < 10; m++) {
    arry.push(daugSk(m));
  }
  console.log(arry.join(' '));
}

daugSk();
console.log('_____________');
daugSk10();

console.log();
console.log('_________ funkcijos 2dalis uzduotys-1, 12paskaita_______');
console.log();

function pasisveikinimas(vardas) {
  console.log('labas', vardas);
}
pasisveikinimas('Tomas');
function atsisveikinimas(vardas) {
  console.log('viso gero', vardas);
}
atsisveikinimas('Reda');
const vardas = 'Ona';
pasisveikinimas(vardas);
atsisveikinimas(vardas);

console.log();
console.log('_________ funkcijos 2dalis uzduotys-2, 12paskaita_______');
console.log();

function skLigybe(a, b) {
  if (a > b) {
    console.log(a, 'skaicius didesnis uz', b);
  } else if (a === b) {
    console.log(a, 'skaicius lygus', b);
  } else if (a < b) {
    console.log(a, 'skaicius mazesnis uz', b);
  }
}

skLigybe(8, 6);
console.log('_________');
skLigybe(3, 3);

console.log();
console.log('_________ funkcijos 2dalis uzduotys-3, 12paskaita_______');
console.log();

function auto(masina, modelis, gam_metai, darbinis_turis) {
  console.log(
    'Mano automobilis',
    masina,
    'modeli',
    modelis,
    'kurios darbinis turis-',
    darbinis_turis,
    ',yra pagaminta',
    gam_metai,
    'm.'
  );
}
auto('BMW', 'V-5', 2023, 53);

console.log();
console.log('_________ funkcijos 2dalis uzduotys-4, 12paskaita_______');
console.log();

function sumai_rasti(pirmas_sk, antras_sk) {
  console.log(pirmas_sk, '+', antras_sk, '=', pirmas_sk + antras_sk);
}
sumai_rasti(7, 5);
function skirtumui_rasti(pirmas_sk, antras_sk) {
  console.log(pirmas_sk, '-', antras_sk, '=', pirmas_sk - antras_sk);
}
skirtumui_rasti(8, 6);

function funcija_ketvirta() {
  let atsitiktiniai_sk1 = Math.floor(Math.random() * 10 + 1);
  let atsitiktiniai_sk2 = Math.floor(Math.random() * 10 + 1);
  console.log(atsitiktiniai_sk1, atsitiktiniai_sk2);
  sumai_rasti(atsitiktiniai_sk1, atsitiktiniai_sk2);
  skirtumui_rasti(atsitiktiniai_sk1, atsitiktiniai_sk2);
}
funcija_ketvirta();

console.log();
console.log('_________ funkcijos 3dalis uzduotys-1, 12paskaita_______');
console.log();

function for_masyv(masyvas) {
  for (let a in arry) {
    console.log(arry[a].length, arry[a]);
  }
}
let arry = ['kate', 'suo', 'vilkas'];
for_masyv(arry);

console.log();
console.log('_________ funkcijos 3dalis uzduotys-2, 12paskaita_______');
console.log();

function array_perArgumentus(array) {
  for (let sk of array) {
    console.log(
      sk,
      'skaiciaus kvatratas:',
      sk * sk,
      'skaicius padalintas is 2 :',
      sk / 2
    );
  }
}

array_perArgumentus([4, 5, 6, 7]);
array_perArgumentus([6, 8, 12, 14]);

console.log();
console.log('_________ funkcijos 3dalis uzduotys-3, 12paskaita_______');
console.log();

function studentas(pazymiai, vardas, pavarde) {
  console.log(pazymiai, vardas, pavarde);
  let suma = 0;
  for (let sumaa of pazymiai) {
    suma += sumaa;
  }
  console.log('Vidurlis-', suma / pazymiai.length);
}

studentas([10, 9, 8], 'Julija', 'Julaite');
studentas([2, 4, 8], 'Andzius', 'Petraitis');
