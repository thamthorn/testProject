const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const output = document.querySelector('.output');

// const rateText = document.getElementById('rate')

const btn = document.getElementById('swap');

currency_one.addEventListener('change',calculate);
currency_one.addEventListener('change',toDe);
currency_two.addEventListener('change',calculate);
amount_one.addEventListener('input' ,calculate);
// amount_two.addEventListener('input' ,calculate);



function toDe(){
    amount_one.value = 0;
}



function calculate(){
    // console.log("OK")
    const one = currency_one.value;
    const two = currency_two.value;
    // one.style.display = 'none';


    let url = `https://open.er-api.com/v6/latest/${one}`;
    
    fetch(url)
    .then(res=>res.json()).then(data=>{
        const rate = data.rates[two];
        output.innerHTML = (amount_one.value*rate);

    })


}

btn.addEventListener('click',()=>{
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate();
})