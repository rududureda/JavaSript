let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function () {
  //   console.log('clicked');
  let employeeCount = parseInt(document.getElementById('employee_count').value);
  let employeeMakesPerDay = parseInt(
    document.getElementById('employee_makes_per_day').value
  );
  let dayReservations = parseInt(
    document.getElementById('day_reservations').value
  );

  let bakeryTotal = employeeCount * employeeMakesPerDay;
  let isBakeryGonaMakeIt = bakeryTotal >= dayReservations;

  // let logInfo = {
  //   bakeryTotal,
  //   isBakeryGonaMakeIt,
  // };
  // console.log(logInfo);
  let resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `<p><strong>Kepykla per diena spes pagaminti:</strong> ${bakeryTotal} kepalu</p>`;
  resultsDiv.innerHTML += `    <p>
      <strong>jai reikia speti pagaminti: </strong>${dayReservations} kepalu
    </p>`;
  resultsDiv.innerHTML += `<p>
      <strong>Ar spes pagaminti? </strong>${isBakeryGonaMakeIt ? 'taip' : 'ne'}
    </p>`;
});

document
  .getElementById('employee_count')
  .addEventListener('keyup', function (event) {
    // console.log('reiksme pasikeite');
    let inputValue = event.target.value;
    console.log(inputValue);

    if (isNaN(inputValue) || inputValue < 0) {
      event.target.classList.add('error');
      event.target.nextElementSibling.classList.add('show');
    } else {
      event.target.classList.remove('error');
      event.target.nextElementSibling.classList.remove('show');
    }
  });

document.getElementById('reset').addEventListener('click', function () {
  document.getElementById('employee_count').value = 0;
  document.getElementById('employee_makes_per_day').value = 0;
  document.getElementById('day_reservations').value = 0;
  document.getElementById('results').innerHTML = '<p>Kolkas nieko nera.</p>';
});
