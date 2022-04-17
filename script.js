const bill = document.querySelector('#bill');
const service = document.querySelector("#service");
const people = document.querySelector("#people");
const button = document.querySelector('#calculate')
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');
const each = document.querySelector('#each');

button.addEventListener('click', function () {
    let index = service.selectedIndex
    // console.log(index)
    let percent =
        (Number(bill.value) * Number(service.options[index].value)) / 100;
    // console.log(percent, '<<<')

    if (people.value >= 1) {
        let amountVal = percent / Number(people.value)
        result.innerText = amountVal + ' each'
    } else {
        result.innerText = 'Should be more then 0 person'
    }
})

