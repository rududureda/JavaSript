//Destitoja mokymai
function printMessage(message) {
  let myMessage = document.createElement('p');
  let container = document.getElementById('messageContainer');

  container.innerHTML = '';
  myMessage.innerText = message;
  container.appendChild(myMessage);
}

function ageTypeValidation(age) {
  return isNaN(age) || age < 0;
}

// galime exportinti iskarto prie itemo rasant zodi 'export' pries.
export let testExport = 'Hello here!';

// galime exportinti kelis itemus is vieno failo vienoj vietoj,
// surasant juos tarp skliausteliu ir atskiriant kableliu.
export { printMessage, ageTypeValidation };
