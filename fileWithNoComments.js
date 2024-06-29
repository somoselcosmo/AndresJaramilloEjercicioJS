//1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
//multiplicar (Los primeros 10 multiplos).

let numero = parseInt(prompt("ingrese un numero"));
for (let i = 1; i <= 10; i++) {
  console.log(i + " x " + numero + " = " + i * numero);
}

//2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
//acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0

let suma = 0;
let numeroA = parseInt(prompt("ingrese un numero"));
while (numeroA != 0) {
  suma = suma + numeroA;
  numeroA = parseInt(prompt("ingrese un nuevo numero"));
}
console.log("la suma de los numeros es: " + suma);

//3.Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
//variable guardar un numero que este en el rango 1 - 100. La persona debera poder
//ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
//valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
//nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
//cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
//que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
//felicitaciones y decirle en cuantos intentos lo ha realizado.

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

//4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
//si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
//Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
//como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
//numero ya no es primo

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

const numeroIngresado = parseInt(
  prompt("Ingresa un número para verificar si es primo:")
);

if (esPrimo(numeroIngresado)) {
  alert(numeroIngresado + " es un número primo.");
} else {
  alert(numeroIngresado + " no es un número primo.");
}

//5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

function mostrarDivisores(numero) {
  console.log("Divisores de " + numero + " :");
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      console.log(i);
    }
  }
}

const numeroIngresado1 = parseInt(
  prompt("Ingresa un número para mostrar sus divisores:")
);
mostrarDivisores(numeroIngresado1);

//6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
//muestre un mensaje por consola con cada uno de los elementos del array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
//doble de cada uno de los elementos.

const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i] * 2);
}

//8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
//objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
//que muestre un mensaje de presentacion por cada elemento del array.

const familia = [
  { nombre: "Andrés", edad: 26, sexo: "masculino", estadoCivil: "casado" },
  { nombre: "Luisa", edad: 22, sexo: "femenina", estadoCivil: "casada" },
  { nombre: "Carlos", edad: 45, sexo: "masculino", estadoCivil: "soltero" },
  { nombre: "Marcela", edad: 55, sexo: "masculino", estadoCivil: "viuda" },
  { nombre: "Marta", edad: 32, sexo: "femenina", estadoCivil: "soltera" },
];
for (let i = 0; i < familia.length; i++) {
  console.log(
    "Hola, me llamo " +
      familia[i].nombre +
      ", tengo " +
      familia[i].edad +
      " años y soy " +
      familia[i].sexo +
      " y mi estado civil es " +
      familia[i].estadoCivil
  );
}

//9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
//muestre los numeros impares.

const arrayImpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrayImpares.length; i++) {
  if (array[i] % 2 !== 0) {
    console.log(arrayImpares[i]);
  }
}

//10 . Realizar un programa que permita la entrada de numeros y calcule la suma de los
//numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
//el usuario ingresa un 0.

let sumaPares = 0;
let sumaImpares = 0;
let numeroIngresado = parseInt(prompt("Ingresa un numero:"));
while (numeroIngresado != 0) {
  if (numeroIngresado % 2 === 0) {
    sumaPares += numeroIngresado;
  } else {
    sumaImpares += numeroIngresado;
  }
  numeroIngresado = parseInt(prompt("Ingresa un numero:"));
}
console.log("La suma de los pares es: " + sumaPares);
console.log("La suma de los impares es: " + sumaImpares);

//11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//numero mas grande.

const arrayMaximo = [1, 4, 67, 2, 8, 35, 65, 84, 91, 34];
let maximo = arrayMaximo[0];
for (let i = 1; i < arrayMaximo.length; i++) {
  if (arrayMaximo[i] > maximo) {
    maximo = arrayMaximo[i];
  }
}
console.log(maximo);

//12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//numero mas chico

const arrayMinimo = [1, 4, 67, 2, 8, 35, 65, 84, 91, 34];
let minimo = arrayMinimo[0];
for (let i = 1; i < arrayMinimo.length; i++) {
  if (arrayMinimo[i] < minimo) {
    minimo = arrayMinimo[i];
  }
}
console.log(minimo);

//13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
//ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
//manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
//un empate. Caso contrario mostrar un mensaje con el nombre de la persona
//ganadora.

let ganador = false;
let turnoJugador1;
let turnoJugador2;

const jugador1 = prompt("Jugador 1, ingresa tu nombre");
const jugador2 = prompt("Jugador 2, ingresa tu nombre");
while (ganador == false) {
  turnoJugador1 = parseInt(
    prompt(jugador1 + ", ingresa tu mano (1 = piedra, 2 = papel, 3 = tijera)")
  );

  turnoJugador2 = parseInt(
    prompt(jugador2 + ", ingresa tu mano (1 = piedra, 2 = papel, 3 = tijera)")
  );

  if (
    (turnoJugador1 == 1 && jugador2 == 3) ||
    (turnoJugador1 == 2 && jugador2 == 1) ||
    (turnoJugador1 == 3 && jugador2 == 2)
  ) {
    ganador = true;
    console.log(jugador1 + " gana");
  } else if (
    (turnoJugador2 == 1 && jugador1 == 3) ||
    (turnoJugador2 == 2 && jugador1 == 1) ||
    (turnoJugador2 == 3 && jugador1 == 2)
  ) {
    ganador = true;
    console.log(jugador2 + " gana");
  } else {
    console.log("Empate, vuelvan a intentar");
  }
}

//14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

let asterisco = "* ";

for (let i = 0; i < 5; i++) {
  console.log(asterisco);
  asterisco += "* ";
}

//15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
//pero invertido.

let asteriscos = "* * * * *";

for (let j = 5; j > 0; j--) {
  console.log(asteriscos);
  asteriscos = asteriscos.slice(0, asteriscos.length - 2);
}

//16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
//pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

const arrayDesordenado = [14, 32, 65, 98, 2, 5, 21, 27, 59, 70];
const arrayOrdenado = ordenarArray(arrayDesordenado);
function ordenarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
console.log(arrayOrdenado);
