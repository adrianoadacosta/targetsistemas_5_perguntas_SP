/** @format */

// Faturamento mensal por estado
const faturamentoPorEstado = {
	SP: 67836.43,
	RJ: 36678.66,
	MG: 29229.88,
	ES: 27165.48,
	Outros: 19849.53,
};

// Função para calcular o percentual de representação
function calcularPercentuais(faturamento) {
	// Calculando o total de faturamento
	const totalFaturamento = Object.values(faturamento).reduce(
		(acc, valor) => acc + valor,
		0
	);

	// Calculando e exibindo o percentual de cada estado
	for (const estado in faturamento) {
		const percentual = (faturamento[estado] / totalFaturamento) * 100;
		console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
	}
}

// Chamando a função para calcular e exibir os percentuais
calcularPercentuais(faturamentoPorEstado);
