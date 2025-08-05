const USD = 5.50
const EUR = 6.36
const GBP = 7.30

// obtendo os elementos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input para receber somente números
amount.addEventListener("input",() => {
  const hascharacterRTegex = /\D+/g

  console.log(amount.value)
  amount.value = amount.value.replace(hascharacterRTegex, " ")
})

// Captando o evento do submit no formulário
form.onsubmit = (event) => {
  event.preventDefault()
  
  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break

     case "EUR":
       convertCurrency(amount.value, EUR, "€")
      break

      case "GBP":
         convertCurrency(amount.value, GBP, "£")
      break
  }
}

function convertCurrency(amount, price, symbol){
  // aplica a class para mostrar o resultado.
 try{
  description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

  let total = String(amount * price).replace(".", ",")
  result.textContent = `${total} Reais`

  footer.classList.add("show-result")
 }catch(erro){
  // remove a class do footer
  footer.classList.remove("show-result")
  console.log(error)
  alert("não foi possível converter, por favor tente mais tarde.")
 }
}

// Formata a moeda para o real Brasileiro.
function formatCurrencyBRL(value){
return Number(value).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
})
}