function Fibonacci(numero) {
  let i = 0;
  let j = 1;

  if (numero === 0 || numero === 1) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    return;
  }

  while (j <= numero)
  {
    if(j === numero)
    {
      console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
      return;
    }

    let prox = i + j;
    i = j;
    j = prox;
  }
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}

const numeroverificar = 55;

Fibonacci(numeroverificar);