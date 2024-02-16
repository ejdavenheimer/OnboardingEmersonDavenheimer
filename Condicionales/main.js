console.log('Starting javascript...');
/* Ejercicio - 1 */
/*let num1 = 4;
let num2 = 5;

if(num1 > num2){
	console.log(num1);
} else{
	console.log(num2);
}*/

/* Ejercicio - 2 */
/*let num1 = 4;
let num2 = 5;

if(num1 > num2){
	console.log(num1);
} else if(num2 > num1){
	console.log(num2);
} else{
	console.log("Los números son iguales");
}*/

/* Ejercicio - 3 */
/*let num1 = 4;
let num2 = 4;

if(num1 === num2){
	console.log("Los números son iguales");
} else{
	console.log("Los números son diferentes");
}*/

/* Ejercicio - 4 */
/*let fecha1 = "2018-9-2";
let fecha2 = "2023-5-7";

if(fecha1 > fecha2){
	console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
} else if(fecha2 > fecha1){
	console.log(`La fecha ${fecha2} es mayor que ${fecha1}`);
} else{
	console.log("Las fechas son iguales");
}*/

/* Ejercicio - 5 */
/*let fecha1 = "2018-10-7";
let fecha2 = "2018-2-17";

if(fecha1 > fecha2){
	console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
} else if(fecha2 > fecha1){
	console.log(`La fecha ${fecha2} es mayor que ${fecha1}`);
} else{
	console.log("Las fechas son iguales");
}*/

/* Ejercicio - 6 */
/*let dato1 = 5;
let dato2 = 7;
let dato3 = 9;

if(dato1 > dato2 && dato1 > dato3){
	console.log(`El número ${dato1} es el mayor`);
} else if(dato2 > dato1 && dato2 > dato3){
	console.log(`El número ${dato2} es el mayor`);
} else{
	console.log(`El número ${dato3} es el mayor`);
}*/

/* Ejercicio - 7 */
/*let color = prompt('Ingresar rojo, azul o verde');

switch(color){
	case 'rojo':
		console.log(`rojo: "El color de la pasión"`);
		break;
	case 'azul':
		console.log(`azul: "El color del mar"`);
		break;
	case 'verde':
		console.log(`verde: "El color de la naturaleza"`);
		break; 
	default:
		console.log("No escribiste uno de los tres colores");
}*/

/* Ejercicio - 8 */
/*let num1 = parseInt(prompt('Ingrese un primer valor del 1 al 100'));
let num2 = parseInt(prompt('Ingrese un segundo valor del 1 al 100'));
let operacion = prompt('Escriba qué operación quiere hacer(suma, resta, multiplicación, división)');

switch(operacion){
	case 'suma':
		console.log(`suma: ${num1+num2}`);
		break;
	case 'resta':
		console.log(`resta: ${num1-num2}`);
		break;
	case 'multiplicación':
		console.log(`multiplicación: ${num1*num2}`);
		break;
	case 'división':
		console.log(`división: ${num1/num2}`);
		break;
	default:
		console.log('No escribió una operación');
}*/

/* Ejercicio - 9 */
/*let persona1 = {
	nombre: "Juan",
	edad: 39,
	altura: 1.19
}

let persona2 = {
	nombre: "Adrian",
	edad: 24,
	altura: 1.67
}

if(persona1.altura > persona2.altura && persona1.edad > persona2.edad){
	console.log(`La persona más alta y de mayor edad es ${persona1.nombre}`);
} else if(persona1.altura > persona2.altura && persona1.edad < persona2.edad){
	console.log(`La persona más alta es ${persona1.nombre} y la de mayor edad es ${persona2.nombre}`);
} else if(persona1.altura < persona2.altura && persona1.edad > persona2.edad){
	console.log(`La persona más alta es ${persona2.nombre} y la de mayor edad es ${persona1.nombre}`);
} else{
	console.log(`La persona más alta y de mayor edad es ${persona2.nombre}`);
}*/

/* Ejercicio - 10 */
/*let persona = {
	nombre: prompt('Ingrese nombre'),
	edad: prompt('Ingrese su edad'),
	altura: prompt('Ingrese su altura con punto después del metro'),
	vision: prompt('Indique su visión')
}

if(persona.edad >= 18 && persona.altura >= 1.50 && persona.vision >= 8 && persona.vision <= 10){
	console.log(`${persona.nombre} estás capacitado para conducir`);
}*/

/* Ejercicio - 11 */
/*let edad = prompt('Ingrese su edad');

if(edad >= 0 && edad <= 12){
	alert('Eres un infante');
} else if(edad >= 13 && edad <= 18){
	alert('Eres un adolescente');
} else if(edad >= 19 && edad <= 45){
	alert('Eres un mayor jóven');
} else if(edad >= 45 && edad <= 100){
	alert('Eres un anciano');
} else{
	alert('¿En realidad tiene esa edad?')
}*/

/* Ejercicio - 12 */
/*let opcion = prompt('Ingrese un valor de 1 al 3');
let num;

switch(opcion){
	case '1':
		num = prompt('Ingrese un número que desee');
		alert(`El número ingresado es ${num}`);
	break;
	case '2':
		num = prompt('Ingrese un número que desee');
		alert(`El doble del número ingresado es ${num*2}`);
	break;
	case '3':
		num = prompt('Ingrese un número que desee');
		alert(`El triple del número ingresado es ${num*3}`);
	break;
	default:
		alert(`Ese valor no está permitido`);
	break;
}*/

/* Ejercicio - 13 HACERRRR */
/*let persona = {
	nombre: prompt('Ingrese su nombre'),
	pase: prompt('¿Tiene pase vip o normal?'),
	entrada: prompt('¿Posee entrada? Contestar por si o por no.')
}

if(persona.nombre == 'Emerson' || persona.pase == 'vip'){
		alert(`Bienvenido ${persona.nombre}`);
}

if(persona.entrada === 'si'){
	let usarEntrada = confirm('¿Desea usar su entrada? Aceptar para confirmar.');
	if(!usarEntrada){
		alert(`Adiós ${persona.nombre}`);
	} else if(usarEntrada || persona.nombre == 'Emerson' || persona.pase == 'vip'){
		alert(`Bienvenido ${persona.nombre}`);
	}
} else if(persona.entrada === 'no' && persona.nombre != 'Emerson' && persona.pase != 'vip'){
	let comprarEntrada = prompt('¿Desea comprar entrada? si o no');
	if(comprarEntrada == 'si'){
		let dinero = prompt('¿Cuál es si dinero disponible?');
		if(dinero>=1000){
			alert(`La venta ha sido exitosa, bienvenido ${persona.nombre}`);
		} else{
			alert(`Fondo no suficiente ${persona.nombre}`);
		}
	} else{
		alert(`Adiós ${persona.nombre}`);
	}
}*/