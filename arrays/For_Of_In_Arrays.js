let medziai = ['obelis', 'berzas', 'azuolas', 'liepa'];

for (const medis in medziai) {
  console.log(medis, '-', medziai[medis]);
}

console.log();
console.log('_________ Masyvai 3dalis, uzduotys- 2, 10paskaita_______');
console.log();

let sarasas = ['vanduo', 'aliejus', 'pienas'];

for (let i = 0; i < sarasas.length; i++) {
  console.log('sąraše yra-', sarasas[i]);
}
{
  console.log('Viso sąraše yra-', sarasas.length, 'produktai.');
}

console.log();
console.log('_________ Masyvai 3dalis, uzduotys-3, 10paskaita_______');
console.log();

let pazymiai = [10, 5, 8, 9];
let suma = 0;

for (let iVietoje of pazymiai) {
  suma += iVietoje;
  console.log('pazymiai -', iVietoje);
}

console.log('Pazymiu vidurkis', suma / pazymiai.length);

console.log();
console.log('_________ Masyvai 3dalis, uzduotys-4, 10paskaita_______');
console.log();

let kilometrai = [120, 145, 90, 200, 205];
let skDidesni = 0;
for (const pvz in kilometrai) {
  if (kilometrai[pvz] >= 150) {
    console.log(pvz, kilometrai[pvz]);
  }
}
console.log();
