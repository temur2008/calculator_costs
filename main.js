//income inputs
const incomeSalary = document.getElementById('income-salary'),
      incomeFreelance = document.getElementById('income-freelance'),
      incomeExtra1 = document.getElementById('income-extra-1'),
      incomeExtra2 = document.getElementById('income-extra-2');

//costs inputs
const costsFlat = document.getElementById('costs-flat'),
    costsHouseServices = document.getElementById('costs-house-services'),
    costsTransport = document.getElementById('costs-transport'),
    costsCredit = document.getElementById('costs-credit');

//costs inputs
    const totalMonthInput = document.getElementById('total-month'),
          totalDayInput = document.getElementById('total-day'),
          totalYearInput = document.getElementById('total-year');
    let totalMonth, totalDay, totalYear;
    
    // money box

const inputs = document.querySelectorAll('.input');
 for( input of inputs) {
     input.addEventListener('input', () => {
        countingAvailableMoney();
     })
 }

 const StrToNum = str => str.value ? parseInt(str.value) : 0;


 const countingAvailableMoney = () => {
    const totalPerMonth = StrToNum(incomeSalary)+StrToNum(incomeFreelance)+StrToNum(incomeExtra1)+StrToNum(incomeExtra2);
    const totalCosts = StrToNum(costsFlat)+StrToNum(costsHouseServices)+StrToNum(costsTransport)+StrToNum(costsCredit);

    totalMonth = totalPerMonth-totalCosts;
    totalMonthInput.value=totalMonth;

 }
