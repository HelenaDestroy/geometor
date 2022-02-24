//cuadrado
function perimetroCuadrado(lado) 
{ 
  return lado * 4;
}
function calcularPerimetroCuadrado() 
{ const input =  document.getElementById("inputCuadrado");
  const value = parseInt(input.value);
  const perimetro = perimetroCuadrado(value)
  alert ("The perimeter of the Square is: "+ perimetro + " cm");
}

function areaCuadrado(lado)
{  return (lado * lado);
    }
function calcularAreaCuadrado(){
const input =  document.getElementById("inputCuadrado");
const value = parseInt(input.value);
const area = areaCuadrado(value);
alert ("The area of the Square is: "+ area + " cm²");
} 
//triangulo

function perimetroTriangulo(lado1, lado2, base)
{
  resultado = lado1 + lado2 + base
  return resultado;
}
 function calcularPerimetroTriangulo()
{
input1 =  document.getElementById("input1Lado");
input2 =  document.getElementById("input2Lado");
input3 =  document.getElementById("input3Base");

const inp1 = parseInt(input1.value);
const inp2 = parseInt(input2.value);
const inp3 = parseInt(input3.value);
const perimetro = perimetroTriangulo(inp1, inp2, inp3);
alert ("The perimeter of the Triangle is: "+ perimetro + " cm");
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
 
function calcularAreaTriangulo()
{
const input3 =  document.getElementById("input3Base");
const input4 =  document.getElementById("input4Altura");
const inp3 = parseInt(input3.value);
const inp4 = parseInt(input4.value);
const area = areaTriangulo(inp3, inp4);
alert ("The area of the Triangle is: "+ area + " cm²"); 
    }

//circulo 

const PI = Math.PI;
function diametroCirculo(radio){  
return (radio * 2);
}
function calcularDiametroCirculo()
{  
  const inputRadio =  document.getElementById("inputRadio");
  const radio = parseInt(inputRadio.value);
  const diametro = diametroCirculo(radio); 
  alert ("The diameter of the Circle is: "+ diametro + " cm");
 }
 

function perimetroCirculo(radio)
{
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function calcularPerimetroCirculo()
{  const radio = parseInt(inputRadio.value);
   const perimetro = perimetroCirculo(radio)
  alert ("The perimeter of the Circle is: "+ perimetro.toFixed(3) + " cm");
}
  
function areaCirculo(radio)
{
  return (Math.pow(radio, 2) * PI); 
}  

function calcularAreaCirculo()
{ const radio = parseInt(inputRadio.value);
  const area = areaCirculo(radio)
  alert ("The area of the Circle is: "+ area.toFixed(3) + " cm²");
}  