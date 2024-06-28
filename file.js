//1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
//multiplicar (Los primeros 10 multiplos).

/*
let numero = parseInt(prompt("ingrese un numero"));
for (let i = 1; i <= 10; i++) {
  console.log(i + " x " + numero + " = " + (i * numero));
};
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

//3.Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
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

//4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
//si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
//Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
//como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
//numero ya no es primo

/*
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
};

const numeroIngresado = parseInt(
  prompt("Ingresa un número para verificar si es primo:")
);

if (esPrimo(numeroIngresado)) {
  alert(numeroIngresado + " es un número primo.");
} else {
  alert(numeroIngresado + " no es un número primo.");
};
*/

//5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

/*
function mostrarDivisores(numero) {
  console.log("Divisores de " + numero + " :");
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      console.log(i);
    }
  }
}

const numeroIngresado = parseInt(
  prompt("Ingresa un número para mostrar sus divisores:")
);
mostrarDivisores(numeroIngresado);
*/

//6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
//muestre un mensaje por consola con cada uno de los elementos del array.

/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
};
*/

//7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
//doble de cada uno de los elementos.

/*
const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i] * 2);
};
*/

//8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
//objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
//que muestre un mensaje de presentacion por cada elemento del array.

/*
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
};
*/

//9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
//muestre los numeros impares.

/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    console.log(array[i]);
  }
}
*/
