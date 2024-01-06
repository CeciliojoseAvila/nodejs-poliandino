
// Función que toma un número y una función de callback
function resultadoAsync(number, callback) {
  setTimeout(function () {
    const result = number * 2;
    callback(result);
  }, 1000);
}

// Función de callback que se pasa a doSomethingAsync
function handleResult(result) {
  console.log("El resultado es:", result);
}

// Llamada a la función doSomethingAsync con una función de callback
resultadoAsync(6, handleResult);