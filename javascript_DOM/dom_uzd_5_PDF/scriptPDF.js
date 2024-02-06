let penkioliktasTekstas = document.getElementById('penkioliktas-tekstas');

let zodziai = zodziuKiekis.value;

function zodziuKiekis() {
  let tekstas = penkioliktasTekstas.value;
  let zodziai = tekstas.trim().split('');
  (document.getElementById('penkiolikto-atsakymai').innerHTML =
    'zodziu kiekis:'),
    zodziai.length;
}
