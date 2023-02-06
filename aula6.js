// A MACH1 Escola de aviação e pilotagem promove a reciclagem de seus pilotos (instrutores) a cada 2 anos.
// Como base nessa informação, você deve construir um algoritmo que receba a informação de quantos anos o piloto está vinculado a escola, e, em contrapartida, deve devolver para o usuário qual o número de reciclagens que este piloto já participou.
// Caso esse piloto tenha apenas 1 ano de vínculo com a escola você deve responder para o usuário que ele ainda não tem o tempo mínimo de 2 anos para ter uma reciclagem.
// Se o usuário digitar um texto (“EX: 1 ano”), responda que ele deve digitar apenas números para receber o dado correto.”

// Dicas importantes:
//   ● Preste atenção nas palavras destacadas no texto do problema;
//   ● Utilize prompt para receber o valor do usuário;
//   ● Não esqueça de converter o valor recebido para o tipo adequado, pois o prompt sempre devolve uma string;
//   ● Valide se o usuário realmente digitou um número;
//   ● Utilize estrutura de repetição e o incremento correto para obter os valores;
//   ● Utilize alert para exibir a resposta.
//   ● Não deixe o usuário sem uma resposta adequada.


let anosVinculados = prompt("Quantos anos você está vinculado à escola?");
  
if (!isNaN(anosVinculados)) {
  anosVinculados = parseInt(anosVinculados);
  if (anosVinculados >= 2) {
    alert("Você já participou de " + (anosVinculados / 2) + " reciclagens.");
  } else if (anosVinculados >= 1) {
    alert("Você ainda não tem o tempo mínimo de 2 anos para ter uma reciclagem.");
  } else {
    alert("O número de anos deve ser maior ou igual a 1.");
  }
} else {
  alert("Deve digitar apenas números para receber o dado correto.");
}
