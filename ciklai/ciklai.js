for (let i = 0; i <= 10; i++) {
  console.log(i);
}
for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}
for (let i = 1; i <= 20; i += 3) {
  console.log([i]);
}
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    console.log('skaicius praejas salyga', i);
  }
}
console.log();
console.log('_________2/2 svarankiskai__________');

let pradzia = 10;
let pabaiga = 15;

if (pradzia < pabaiga) {
  for (let i = pradzia; i <= pabaiga; i++) {
    console.log(i, i + i);
  }
}
console.log('___________________');
let pradz = 7;
let pabaig = 11;

if (pradz < pabaig) {
  for (let i = pradz; i <= pabaig; i++) {
    if (i % 2 != 0 || i % 8 == 0) console.log(i);
  }
}
