function comparaNumeros(num1, num2) {
  if (!num1 || !num2) return "Defina dois números!";
  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = "";

  if (num1 !== num2) {
    saoIguais = "não";
  }

  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;

  let resultado10 = "menor";
  let resultado20 = "menor";

  if ((compra10 = soma > 10)) {
    resultado10 = "maior que";
  } else if ((compra10 = soma < 10)) {
    resultado10 = "menor que";
  } else {
    resultado10 = "igual a";
  }

  if ((compra20 = soma > 20)) {
    resultado20 = "maior que";
  } else if ((compra20 = soma < 20)) {
    resultado20 = "menor que";
  } else {
    resultado20 = "igual a";
  }

  return `Sua soma é ${soma}, que é ${resultado10} 10 e ${resultado20} 20.`;
}

console.log(comparaNumeros(2, 5)); //altere os números para realizar a comparação!!//
