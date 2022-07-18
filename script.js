let select = document.querySelectorAll("select")
let input = document.querySelector(".input")
const button = document.querySelector('.btn')
const from = document.querySelector('.from')
const date = document.querySelector('.date')

// console.log(input)

fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {

        const entris = Object.entries(data)
            // console.log(entris)
        for (let i = 0; i < entris.length; i++) {

            select[0].innerHTML += `<option>${entris[i][0]}</option>`
            select[1].innerHTML += `<option>${entris[i][0]}</option>`
        }




    })






function convertAmount() {
    let currencies1 = select[0].value;
    let currencies2 = select[1].value;
    const amount = input.value;
    if (isNaN(amount)) {
        from.innerHTML = 'plese enter a number'
    }

    if (currencies1 != currencies2) {
        convert(currencies1, currencies2, amount)
    } else {
        from.innerHTML = 'plese select different currency'
    }
}



function convert(currencies1, currencies2, amount) {
    console.log(currencies1, currencies2, amount)
    const host = "api.frankfurter.app"
    fetch(
            `http://${host}/latest?amount=${amount}&from=${currencies1}&to=${currencies2}`
        ).then((value) => value.json())
        .then((value) => {
            console.log(value)

            from.innerHTML = amount + " " + currencies1 + " = " + Object.values(value.rates)[0] + " " + currencies2;
            date.innerHTML = value.date;
        });
}