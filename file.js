//1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
//multiplicar (Los primeros 10 multiplos).

/*
let numero = parseInt(prompt("ingrese un numero"));
for (let i = 1; i <= 10; i++) {
  console.log(i + " x " + numero + " = " + (i * numero));
}
*/

//2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
//acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0

/*
let suma = 0;
let numero = parseInt(prompt("ingrese un numero"));
while (numero != 0) {
  suma = suma + numero;
  numero = parseInt(prompt("ingrese un nuevo numero"));
}
console.log("la suma de los numeros es: " + suma);
*/

//Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
//variable guardar un numero que este en el rango 1 - 100. La persona debera poder
//ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
//valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
//nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
//cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
//que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
//felicitaciones y decirle en cuantos intentos lo ha realizado.

/*
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;

function jugar() {
  const numeroIngresado = parseInt(prompt("Ingresa un número entre 1 y 100:"));
  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
    alert("Por favor, ingresa un número válido entre 1 y 100.");
    jugar();
  } else {
    intentos++;
    if (numeroIngresado === numeroSecreto) {
      alert(
        "¡Felicitaciones! Adivinaste el número secreto (" +
          numeroSecreto +
          ") en " +
          intentos +
          " intentos."
      );
    } else if (numeroIngresado < numeroSecreto) {
      alert("El número secreto es mayor. Intenta nuevamente.");
      jugar();
    } else {
      alert("El número secreto es menor. Intenta nuevamente.");
      jugar();
    }
  }
}

jugar();
*/

//Realizar un programa que permita decir si un numero es primo. Un numero es primo
//si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
//Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
//como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
//numero ya no es primo

function esPrimo(numero) {
  if (numero <= 1) {
    return false; // Los números menores o iguales a 1 no son primos
  }

  // Verificar divisores hasta la mitad del número
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      return false; // Si encontramos un divisor, no es primo
    }
  }

  return true; // Si no encontramos divisores, es primo
}

const numeroIngresado = parseInt(
  prompt("Ingresa un número para verificar si es primo:")
);

if (esPrimo(numeroIngresado)) {
  alert(`${numeroIngresado} es un número primo.`);
} else {
  alert(`${numeroIngresado} no es un número primo.`);
}
