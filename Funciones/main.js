console.log('Starting javascript...');
/* Ejercicio - 1 ------------------------------------------------------------- */
/*function sumar(){
	console.log(`El resultado de 100x20 es: ${100*20}`)
}
*/

/* Ejercicio - 2 ------------------------------------------------------------- */
/*sumar();*/

/* Ejercicio - 3 ------------------------------------------------------------- */
/*function sumar(num1, num2){
	console.log(`El resultado de ${num1}x${num2} es: ${num1*num2}`)
}*/

/* Ejercicio - 4 ------------------------------------------------------------- */
/*let numeroA = 100;
let numeroB = 20;
sumar(numeroA, numeroB);*/

/* Ejercicio - 5 ------------------------------------------------------------- */
/*function sumar(num1, num2){
	let resultado = num1 * num2;
	return resultado;
}*/

/* Ejercicio - 6 ------------------------------------------------------------- */
/*(function(num1, num2){
	let resultado = num1 * num2;
	return resultado;
})(100,20);*/

/* Ejercicio - 7 ------------------------------------------------------------- */
/*const sumar = (num1, num2) => num1 * num2;
console.log(sumar(100, 20));*/

/* Ejercicio - 8 ------------------------------------------------------------- */
/*function greet(name){
	console.log(`Bienvenido/a ${name}`);
}
greet('Emerson');*/

/* Ejercicio - 9 ------------------------------------------------------------- */
/*const sumar = function(num1, num2){
	return num1*num2;
};

console.log(sumar(9,10));*/

/* Ejercicio - 10 ------------------------------------------------------------- */
/*function area(base, altura){
	return base*altura;
}
function perimetro(lado1, lado2, lado3){
	return lado1+lado2+lado3;
}
let base = 3;
let altura = 5;
let hipotenusa = 8;
console.log(area(base, altura));
console.log(perimetro(base, altura, hipotenusa));*/

/* Ejercicio - 11 ------------------------------------------------------------- */
/*const compra = (precio, cantidad) => {
	let precioTotal = precio*cantidad;

	if(cantidad >= 10 && cantidad <= 19){
		precioTotal = precioTotal*0.9; 
	} else if(cantidad >= 20){
		precioTotal = precioTotal*0.8;
	}
	return precioTotal; 
}
console.log(compra(10, 2));*/

/* Ejercicio - 12 ------------------------------------------------------------- */
/*function esMayorDeEdad(edad){
	if(edad >= 18){
		return 'Eres mayor de edad';
	} else{
		return 'Eres menor de edad';
	}
}
console.log(esMayorDeEdad(10));*/

/* Ejercicio - 13 ------------------------------------------------------------- */
/*function impuesto(ingresoAnual){
	let impuestoPagar;

	if(ingresoAnual <= 10000){
		impuestoPagar = ingresoAnual * 0.1;
	} else if(ingresoAnual <= 20000){
		impuestoPagar = ingresoAnual * 0.15;
	} else{
		impuestoPagar = ingresoAnual * 0.2;
	}

	return impuestoPagar;
}
console.log(impuesto(20000));*/

/* Ejercicio - 14 ------------------------------------------------------------- */
/*function verificar(dia){
	switch(dia){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			return 'Es un día laboral';
		break;
		case 6:
		case 7:
			return 'Es fin de semana';
		default:
			return 'No es un día de la semana';
			break;
	}
}
console.log(verificar(2));*/

/* Ejercicio - 15 ------------------------------------------------------------- */
/*function evaluarNombre(nombre){
	let apellido;
	let edad;
	let informacion = {
		nombre,
		apellido,
		edad
	}

	if(nombre.length == 0){
		console.error('El nombre no puede estar vacío');
	} else{
		apellido=prompt('Ingrese apellido');
	  if(apellido.length == 0){
		console.error('El apellido no puede estar vacío');
		} else{
			edad=prompt('Ingrese edad');
			if(edad.length == 0){
			console.error('La edad no puede estar vacía');
			} else{
				return info = {
					nombre: nombre,
					apellido: apellido,
					edad: edad
				};
			}
		}
	}
}

let nombre = prompt('Ingrese su nombre');
console.log(evaluarNombre(nombre));*/

/* Ejercicio - 16 ------------------------------------------------------------- */
/*function saludar(nombre){
	return `Hola mi nombre es ${nombre}`;
}
function calcularEdad(ageBorn, ageActual){
	return ageActual-ageBorn;
}
function presentarse(){
	alert(`${saludar(prompt('Ingrese su nombre'))} ${calcularEdad(prompt('Ingrese año de nacimiento'), prompt('Ingrese año actual'))}`)
}

presentarse();*/