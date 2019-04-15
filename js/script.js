document.getElementById('uno').addEventListener("click",uno);
document.getElementById('dos').addEventListener("click",dos);
document.getElementById('tres').addEventListener("click",tres);
document.getElementById('cuatro').addEventListener("click",cuatro);
document.getElementById('cinco').addEventListener("click",cinco);
document.getElementById('seis').addEventListener("click",seis);
document.getElementById('siete').addEventListener("click",siete);
document.getElementById('ocho').addEventListener("click",ocho);
document.getElementById('nueve').addEventListener("click",nueve);
document.getElementById('cero').addEventListener("click",cero);
document.getElementById('remove').addEventListener("click",remove);

document.getElementById('porcent').addEventListener("click", porcent);
document.getElementById('sumar').addEventListener("click", sumar);
document.getElementById('restar').addEventListener("click",restar);
document.getElementById('dividir').addEventListener("click",dividir);
document.getElementById('multiplicar').addEventListener("click",multiplicar);
document.getElementById('showResult').addEventListener("click",showResult);
/**/
//Funciones adicionales de Borrado
 function del()
 {
 	 var strng = document.getElementById('resultado').value;
 	 document.getElementById('resultado').value = strng.substring(0, strng.length-1)
 }
 function remove()
 {
 	document.getElementById('resultado').value="";
 	window.location.href="index.html";
 }

 //Def de las funciones sobre los numeros
 function uno()
 {	let actual = document.getElementById('resultado').value+=1;}

 function dos()
 {	let actual = document.getElementById('resultado').value+=2;}

function tres()
{	let actual = document.getElementById('resultado').value+=3;}

function cuatro()
{	let actual = document.getElementById('resultado').value+=4;}

function cinco()
{	let actual = document.getElementById('resultado').value+=5;}

function seis()
{ 	let actual = document.getElementById('resultado').value+=6;}

function siete()
{	let actual = document.getElementById('resultado').value+=7;}

function ocho()
{	let actual = document.getElementById('resultado').value+=8}

function nueve()
{	let actual = document.getElementById('resultado').value+=9;}

function cero()
{	let actual = document.getElementById('resultado').value+=0;}

/*Operaciones basicas*/
 function sumar()
 { 	actual = document.getElementById('resultado').value;
	if (actual == 0)
	{ alert("Da valores primero ;)");}
	else{
 	let actual = document.getElementById('resultado').value+='+';}
}
 function restar()
 { 	actual = document.getElementById('resultado').value;
	if (actual == 0)
	{ alert("Da valores primero ;)");}
	else{
 	let actual = document.getElementById('resultado').value+='-';}
}

function multiplicar()
{   actual = document.getElementById('resultado').value;
	if (actual == 0)
	{ alert("Da valores primero ;)");}
	else{
	let actual = document.getElementById('resultado').value+='*';}
}
function dividir()
{	actual = document.getElementById('resultado').value;
	if (actual == 0)
	{ alert("Da valores primero ;)");}
	else{
	let actual = document.getElementById('resultado').value+="/";}
}
function porcent()
{	actual = document.getElementById('resultado').value;
	if (actual == 0)
	{ alert("Da valores primero ;)");}
	else
	{  let actual = document.getElementById('resultado').value+="%";}
}

//Fin

//Funciones  adicionales , raiz cuadrada, raiz cubica
function raiz()
{
	let actual = document.getElementById('resultado').value;
	actual = (Math.sqrt(actual));
	actual = new Intl.NumberFormat().format(actual);
		if (actual == 0)
		{ alert("Da valores primero ;)");}
		else
		{ 
			document.getElementById('resultado').value = actual;
			document.getElementById('span').style.display = "block";
		  	document.getElementById('show').innerHTML = actual;
		}
}

function raiz_3()
{
	let actual = document.getElementById('resultado').value;
	//Contratio de raiz cubica | Exponenciacion
	actual = Math.pow(actual, (1/3));
	//formato a las variables
	actual = new Intl.NumberFormat().format(actual);
		if (actual == 0)
		{ alert("Da valores primero ;)")}
		else
		{ document.getElementById('span').style.display = "block";
		  document.getElementById('show').innerHTML = actual;}
}
//Fin

//Accion del boton resultado
function showResult()
{
	actual = document.getElementById('resultado').value;
	if (actual == 0)
	{ alert("Da valores primero ;)");}
else{

	//Calcular si la funcion a pedir es de porcentaje
	let porcent = "%"
	let actual = document.getElementById('resultado').value;
		if (actual.indexOf(porcent) > -1)
			{
				arr = actual.split("%",2);
				res = ((arr[0] * arr[1]) / 100);
				document.getElementById('span').style.display = "block";
				document.getElementById('show').innerHTML = res;
			}
	//Cualquier otra funcion que quiera el usario (+,-,*,/)
		else
		{
			document.calculator.total.value=eval(document.calculator.total.value);
			document.getElementById('span').style.display = "block";
			let actual = document.getElementById('resultado').value;
			actual = new Intl.NumberFormat().format(actual);
			document.getElementById('show').innerHTML = actual;
		}
	}
}