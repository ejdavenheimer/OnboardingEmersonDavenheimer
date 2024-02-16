console.log('Starting javascript...');
/* Ejercicio - 1 */
/*let num = prompt('Ingrese un valor entre 1 y 100');

for(let i=num; i>0; i--){
	console.log(i);
}*/

/* Ejercicio - 2 */
/*let num = prompt('Ingrese un valor entre 1 y 10');

for(let i=1; i<=10; i++){
	console.log(`${i} x ${num} es ${i*num}`);
}*/

/* Ejercicio - 3 */
/*let acumulador = 0;
let valor;
while((valor = parseInt(prompt('Ingrese números o cero para finalizar'))) != 0){
	acumulador += valor;
}
console.log(acumulador);*/

/* Ejercicio - 4 */
/*let acumulador = 0;
let valor;
do{
	valor = parseInt(prompt('Ingrese números o cero para finalizar'));
	acumulador += valor;
} while(valor != 0);
console.log(acumulador);*/

/* Ejercicio - 5 */
/*let acumulador = 5;
let num = parseInt(prompt('Ingrese un valor'));
let iteracion = 1;

 while(num != acumulador){
 	if (num > acumulador) {
 		console.log('El número ingresado es mayor que el secreto');
 	} else{
 		console.log('El número ingresado es menor que el secreto');
 	}

 	iteracion++;
 	num = parseInt(prompt('Ingrese otro valor'));
 }
 alert(`Acertaste! Cantidad de intentos ${iteracion}`);*/

/* Ejercicio - 6 */
/*let num = parseInt(prompt('Ingrese un número'));
for(let i=num; i>0; i--){
	if(num%i === 0){
		console.log(i);
	}
}*/

/* Ejercicio - 7 */
/*function sonarCampana(){
	console.log("Ding Dong");
	return "Ding Dong, "
}

let palabra = "";
for(let i=0; i<5; i++){
	palabra += sonarCampana();
}
console.log(palabra);*/

/* Ejercicio - 8 */
/*const fechaLimite = "1997-8-3";
const fechas = ["1984-10-2", "1998-3-2", "1973-15-7", "2024-21-10", "2001-1-9"];

for(let i=0; i<fechas.length; i++){
	if(fechas[i] >= fechaLimite){
		console.log(fechas[i]);
	}
}*/

/* Ejercicio - 9 */
/*let colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"];

for(const valor of colores){
	console.log(valor);
}*/

/* Ejercicio - 10 */
/*function recorrerArray(colores){
	for(const valor of colores){
		console.log(valor);
	}
}

let colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"];
recorrerArray(colores);*/

/* Ejercicio - 11 */
/*let numeros = [5, 7, 10, 13, 17];
for(const valor of numeros){
	console.log(`El número es ${valor} y su doble es ${valor*2}`);
}*/

/* Ejercicio - 12 */
/*const objeto = [
	{
		nombre: 'Juan',
		apellido: 'Perez',
		edad: 25,
		integrante: 'Padre'
	},
	{
		nombre: 'Pedro',
		apellido: 'Perez',
		edad: 26,
		integrante: 'Hermano'
	},
	{
		nombre: 'Rosa',
		apellido: 'Gomez',
		edad: 30,
		integrante: 'Madre'
	},
	{
		nombre: 'Ana',
		apellido: 'Perez',
		edad: 5,
		integrante: 'Hija'
	},
];

function mostrarObjeto(objeto){
	for(let datos of objeto){
		console.log(`Hola soy ${datos.nombre} (${datos.integrante}) y tengo ${datos.edad} años`);
	}
}

mostrarObjeto(objeto);*/

/* Ejercicio - 13 */
/*let objeto = {
	nombre: 'Alan',
	apellido: 'Schoner',
	nacionalidad: 'Colombiana',
	edad: 27,
	hijos: 0
}

for(let keys in objeto){
	console.log(keys);
}*/

/* Ejercicio - 14 */
/*for(let keys in objeto){
	console.log(objeto[keys]);
}*/

/* Ejercicio - 15 */
/*function contarParImpar(){
	let valor;
	let contadorPar=0;
	let contadorImpar=0;

	valor = prompt('Ingrese un valor o cero para finalizar');

	while(valor != 0){
		if(valor%2 == 0){
			contadorPar++;
		} else{
			contadorImpar++;
		}
		valor = prompt('Ingrese un valor o cero para finalizar');
	}

	console.log(`Pares: ${contadorPar}`);
	console.log(`Impares: ${contadorImpar}`);
}

contarParImpar();*/

/* Ejercicio - 16 */
/*let vector = [100, 2, 3, 4, 50, 6, 7, 8, 9, 10];

function nroMasGrande(vector){
	let mayor = vector[0];

	for(let i=0; i<vector.length; i++){
		if(vector[i] > mayor){
			mayor = vector[i];
		}
	}

	console.log(`El mayor número del array es ${mayor}`);
}

nroMasGrande(vector);*/