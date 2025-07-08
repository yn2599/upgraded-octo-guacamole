// obtendo os elementos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')

// Manipulando o input para receber somente números
amount.addEventListener("input",() => {
  const hascharacterRTegex = /\D+/g

  console.log(amount.value)
  amount.value = amount.value.replace(hascharacterRTegex, " ")
})

// Captando o evento do submit no formulário
form.onsubmit = (event) => {
  event.preventDefault()
  console.log(currency.value)
}