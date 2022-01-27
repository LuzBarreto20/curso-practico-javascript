// Código del Cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");



function perimetroCuadrado(lado) {
    return lado * 4; 
} 


//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del Triángulo
console.group("Triángulo");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log(
   
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del Triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//console.log("El perímetro del Triángulo es: " + perimetroTriangulo + "cm^2");


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Código del Círculo

console.group("Círculo");

// Radio 
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cm, ");

// Diámetro 

function diametroCirculo(radio) {
    return radio * 2;
} 
 
//console.log("El diámetro del círculo es: " + diametroCirculo + "cm, ");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//console.log("La circunferencia del círculo es: " + perimetroCirculo + "cm, ");

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
    
//console.log("El área del círculo es: " + areaCirculo+ "cm^2");

console.groupEnd();

// Aquí interactuamos con el  HTML 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro); 

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area); 
}
