let buttonVistienos = document.getElementById('button-vistienos');
let porcijos = 1;
buttonVistienos.addEventListener('click', function () {
  let results = document.getElementById('rezults-box');
  let vvistienos = 200;
  let salotu = 200;
  let aliejaus = 20;
  results.innerHTML = `<p> vistienos:${vvistienos * porcijos} g</p>`;
  results.innerHTML += `<p> salotu:${salotu * porcijos} g</p>`;
  results.innerHTML += `<p> aliejaus:${aliejaus * porcijos} g</p>`;
});

let buttonTortas = document.getElementById('tortas');
buttonTortas.addEventListener('click', function () {
  let results = document.getElementById('rezults-box');
  let miltu = 150;
  let pieno = 200;
  let melyniu = 70;
  results.innerHTML = `<p> miltu:${miltu * porcijos} g</p>`;
  results.innerHTML += `<p> pieno:${pieno * porcijos} g</p>`;
  results.innerHTML += `<p> melyniu:${melyniu * porcijos} g</p>`;
});

let buttonMakaronai = document.getElementById('makaronai');
buttonMakaronai.addEventListener('click', function () {
  let results = document.getElementById('rezults-box');
  let makaronu = 100;
  let surio = 50;
  let jautienos = 70;
  results.innerHTML = `<p> makaronu:${makaronu * porcijos} g</p>`;
  results.innerHTML += `<p> surio:${surio * porcijos} g</p>`;
  results.innerHTML += `<p> melyniu:${jautienos * porcijos} g</p>`;
});

let kiekGaminsite = document.getElementById('porcijos');
kiekGaminsite.addEventListener('change', () => {
  porcijos = kiekGaminsite.value;
  console.log(kiekGaminsite.value);
});
