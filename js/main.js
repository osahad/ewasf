const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween:50,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide:true,
    autoplay:{
        delay:5000
    }
  });


/* Значение из текстовых инпутов:*/
const anInitialFee = document.getElementById('an-initial-fee'), // первоначальный взнос
      creditTerm = document.getElementById('credit-term'); // срок кредита

/* Значение из range инпутов:*/
const anInitialFeeRange = document.getElementById('an-initial-fee-range'), // range для первоначального взноса
      anInitialTermRange = document.getElementById('credit-term-range'); 

const totalAmountOfCredit = document.getElementById('amount-of-credit'), 
      totalMonthlyPayment = document.getElementById('monthly-payment'); 

const inputsRange = document.querySelectorAll('.input-range'); 

/* Мапинг range + input[text]*/
const assignValue = () => {
    anInitialFee.value = anInitialFeeRange.value;
    creditTerm.value = anInitialTermRange.value;
}


for(let input of inputsRange) {
    input.addEventListener('input', () => {
        assignValue();
        calculation(anInitialFee.value, creditTerm.value)
    })
}

assignValue();

const calculation = (anInitialFee = 100000, creditTerm = 1) => {
    /* 
        Сумма кредита = Сумма кредита + ((((Стоимость автомобиля + допы) - первый взнос) * проценты) / 100 )
    */

    /* Расчет итогового кредита*/
    const amountOfPrecents = (((priceOfAuto + totalPriceOfConfiguration) - anInitialFee) * currentPrecent) / 100;
    const totalPriceOfCredit = (priceOfAuto + totalPriceOfConfiguration) - anInitialFee + amountOfPrecents;

    /* Расчет месяцев*/
    const numberOfMonth = 12 * creditTerm; // Количество месяцев
    const monthlyPayment = totalPriceOfCredit / numberOfMonth //ежемесячный платеж

    if(totalPriceOfCredit < 0) {
        return false;
    } else {
        totalMonthlyPayment.innerHTML = Math.round(monthlyPayment);
    }

}

calculation();



