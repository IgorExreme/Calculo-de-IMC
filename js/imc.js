
let imc = document.getElementById("imc");

imc.addEventListener("submit", (e) => {
	e.preventDefault();

	let pesoValor = document.getElementById("peso").value;
	let alturaValor = document.getElementById("altura").value;

	let peso = parseFloat(pesoValor)
	let altura = parseFloat(alturaValor)

	if ((peso > 0) && (altura > 0)) {
		let resultado = Math.round(peso/Math.pow((altura/100), 2));

		document.getElementById("resultado").innerHTML = `Seu IMC é ${resultado}`;
	} else {
		alert("É impossível ter peso e altura menor que 0!");
	}
  });
