function inverterString(str) {
  let inverter = "";

  for(let i = str.length - 1; i >= 0; i--)
  {
    inverter += str[i];
  }

  return inverter;
}

const palavra = "paralelepipedo";

const palavraInvertida = inverterString(palavra);

console.log("Palavra original:", palavra);
console.log("Palavra invertida:", palavraInvertida);