//Destitoja mokymai
import { printMessage, ageTypeValidation, testExport } from './helpers.js';
import asGaliuUzdetiBetKokiPavadinimaDefaultExportuotamItemui from './defaultExport.js';

console.log('cia yra test export:', testExport);

asGaliuUzdetiBetKokiPavadinimaDefaultExportuotamItemui();

// paimti reiksme is inputo age
let ageInput = document.getElementById('age');
ageInput.addEventListener('input', (e) => {
  let age = e.target.valueAsNumber;
  const validationError = ageTypeValidation(age);

  if (validationError) return printMessage('please enter a valid age');

  age < 18
    ? printMessage('you are too young')
    : printMessage('you are old enough');
});
