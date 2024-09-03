/** @format */

// Função para inverter uma string
function inverterString(str) {
	let stringInvertida = '';

	// Percorrendo a string de trás para frente
	for (let i = str.length - 1; i >= 0; i--) {
		stringInvertida += str[i];
	}

	return stringInvertida;
}

// Entrada do usuário (pode ser alterada para uma string fixa)
const userInput = prompt('Digite uma string para inverter:');

// Invertendo a string
const stringInvertida = inverterString(userInput);

// Exibindo o resultado
console.log(`String original: ${userInput}`);
console.log(`String invertida: ${stringInvertida}`);
