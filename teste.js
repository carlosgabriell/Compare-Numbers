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
    resultado10 = "maior";
  } else if (compra10) {
    resultado10 = "menor";
  } else {
    resultado10 = "igual";
  }

  if ((compra20 = soma > 20)) {
    resultado20 = "maior";
  } else if (compra20) {
    resultado20 = "menor";
  } else {
    resultado20 = "igual";
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(10, 10)); //altere os números para realizar a comparação!!//
