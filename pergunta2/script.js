/** @format */

// Função para gerar a sequência de Fibonacci até um número máximo
function fibonacciSequence(max) {
	const sequence = [0, 1];

	while (true) {
		const nextValue =
			sequence[sequence.length - 1] + sequence[sequence.length - 2];
		if (nextValue > max) break;
		sequence.push(nextValue);
	}

	return sequence;
}

// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
	const fibSequence = fibonacciSequence(num);
	return fibSequence.includes(num);
}

// Entrada do usuário
const userInput = prompt(
	'Informe um número para verificar se pertence à sequência de Fibonacci:'
);

// Convertendo a entrada para um número
const numberToCheck = parseInt(userInput, 10);

// Verificando se o número pertence à sequência
if (isNaN(numberToCheck)) {
	console.log('Por favor, insira um número válido.');
} else {
	if (isFibonacci(numberToCheck)) {
		console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
	} else {
		console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
	}
}
