function decimalParaBinario(decimal) {
    // Verifica se o número de entrada é válido
    if (isNaN(decimal) || decimal < 0) {
      return "Número inválido";
    }
  
    // Converte o número decimal para binário
    let binario = "";
    while (decimal > 0) {
      binario = (decimal % 2) + binario;
      decimal = Math.floor(decimal / 2);
    }
  
    return binario;
  }
  
  // Exemplo de uso
  const numeroDecimal = 2;
  const numeroBinario = decimalParaBinario(numeroDecimal);
  console.log(numeroBinario);
x  