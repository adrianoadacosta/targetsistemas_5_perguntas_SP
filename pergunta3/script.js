/** @format */

// Função para calcular os dados de faturamento
async function calcularFaturamento() {
	// Lendo o arquivo JSON
	const response = await fetch('faturamento.json');
	const data = await response.json();

	const faturamento = data.faturamento;

	// Inicializando variáveis
	let menorValor = Infinity;
	let maiorValor = -Infinity;
	let somaFaturamento = 0;
	let diasComFaturamento = 0;

	// Processando os dados de faturamento
	faturamento.forEach((dia) => {
		const valor = dia.valor;

		// Ignorando dias sem faturamento
		if (valor > 0) {
			somaFaturamento += valor;
			diasComFaturamento++;

			// Atualizando menor e maior valor
			if (valor < menorValor) {
				menorValor = valor;
			}
			if (valor > maiorValor) {
				maiorValor = valor;
			}
		}
	});

	// Calculando a média mensal
	const mediaMensal = somaFaturamento / diasComFaturamento;

	// Contando os dias com faturamento acima da média
	let diasAcimaDaMedia = 0;
	faturamento.forEach((dia) => {
		if (dia.valor > mediaMensal) {
			diasAcimaDaMedia++;
		}
	});

	// Resultados
	console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
	console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
	console.log(
		`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
	);
}

// Chamando a função para calcular e exibir os dados
calcularFaturamento();
