function converter() {
    var numeroInput = document.getElementById("numeroInput").value;
    
    
    var numeroLimpo = numeroInput.replace(/\s/g, "");
  
  
    var base;
    if (numeroLimpo.match(/^[0-1]+$/)) {
      base = 2;
    } else if (numeroLimpo.match(/^[0-9]+$/)) {
      base = 10; 
    } else if (numeroLimpo.match(/^[0-9A-Fa-f]+$/)) {
      base = 16;
    } else {
       
      document.getElementById("binarioOutput").textContent = "";
      document.getElementById("decimalOutput").textContent = "";
      document.getElementById("hexadecimalOutput").textContent = "";
      return;
    }
  
   
    var decimal = parseInt(numeroLimpo, base);
    var binario = decimal.toString(2);
    var hexadecimal = decimal.toString(16).toUpperCase();
  

    document.getElementById("binarioOutput").textContent = binario;
    document.getElementById("decimalOutput").textContent = decimal;
    document.getElementById("hexadecimalOutput").textContent = hexadecimal;
  }