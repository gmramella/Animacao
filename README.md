# Animacao

## Exercício de trajetória

Abrir trajectory.html

Pressionar um dos botões para executar as trajetórias (o de cima é de velocidade constante, o de baixo é de velocidade acelerada)

Opcional: mudar os valores no formulário

| Solicitado | Implementado |
| --- | --- |
| Ponto, triângulo/seta | Ponto, triângulo |
| Trajetórias linear, circular, espiral, bézier | Trajetórias linear, circular, espiral, bézier |
| Entrada de conjunto de pontos de controle | Usuário pode especificar |
| 2 tipos de mudança de aceleração | *obs |

Triângulos orientados durante a trajetória

*obs: Inicialmente, o valor da aceleração da trajetória linear acelerada era calculada pela função gaussiana aplicada num intervalo centralizado em x=0 e dividido pelo tamanho da distância entre os pontos

Acabei implementando a aceleração constante baseada na integral dupla da aceleração, que resulta em x=x0+v0t+at²/2 [1], em um arquivo diferente.

Consiste em somar a aceleração na velocidade e somar a média da aceleração, no intervalo, na posição.

Depois, implementei a aceleração variada baseada na integral tripla do jerk, que resulta em x=x0+v0t+a0t²/2+jt³/6 [2], em outro arquivo.

Consiste em aplicar a mudança na aceleração em dt pequeno, tirar a média da aceleração no intervalo, aplicar na velocidade, tirar a média da velocidade e aplicar na posição.

Comprovei que os valores estão corretos usando uma variável t acrescida de dt a cada iteração de setInterval e usei nas equações [1] e [2].

Como funcionou, apliquei apenas na trajetória linear.

Em seguida, fiz o movimento circular constante.

Ao invés de atualizar a posição da partícula, se mandar criar uma a cada nova posição, fica visível que forma uma espiral e não um círculo.

Desenhando os vetores de aceleração e velocidade e testando o ângulo entre eles, fica claro que o JavaScript tem algum erro de floating point que causa um leve deslocamento no vetor aceleração, já que não passa exatamente em cima do centro de rotação.

Ainda, o vetor velocidade é perpendicular a ele.

Por fim, fiz o movimento circular variado, que não parece estar correto.

Disponibilizo os 4 arquivos como substitutos à aplicação da aceleração nas outras trajetórias.

## Exercício de partículas

Abrir particles.html

| Comando | Descrição |
| --- | --- |
| clique | cria novo sistema de partículas |
| c | partículas em forma de circle |
| h | partículas em forma de hex |
| r | partículas em forma de rect |
| b | trajetória bézier |
| l | trajetória linear |
| s | trajetória piral |
| q | diminui quantidade de ondas, min 1 |
| w | aumenta quantidade de ondas, max 10 |
| o | emissor quadrado |
| p | emissor pontual |
| - | diminui tamanho das partículas, min 1 |
| + | aumenta tamanho das partículas, max 70 |
| 1 | diminui valor do campo r da cor, overflow vai pra 255 |
| 2 | diminui valor do campo g da cor, overflow vai pra 255 |
| 3 | diminui valor do campo b da cor, overflow vai pra 255 |
| 4 | aumenta valor do campo r da cor, overflow vai pra 0 |
| 5 | aumenta valor do campo g da cor, overflow vai pra 0 |
| 6 | aumenta valor do campo b da cor, overflow vai pra 0 |
| espaço | bool se destrói sistemas de partículas existentes ou não |

| Comando | Descrição |
| --- | --- |
| forma das partículas | circle |
| trajetória | linear |
| quantidade de ondas | 10 |
| emissor | pontual |
| tamanho das partículas | 4 |
| cor | rgb(0,0,0) |
| destruir sistemas de partículas existentes | true |

| Solicitado | Implementado |
| --- | --- |
| 3+ variações nos atributos | 3 variações nos atributos (forma, tamanho, cor) |
| 2 formas de nascimento diferentes | 2 x 2 formas de nascimento diferentes (pontual, quadrado) x (1 sistema de partícular por vez, sem limite) |
| 1+ variação na aparência da partícula | 1 variação na aparência da partícula (alpha decrescente proporcional ao tempo de vida) |
| 3+ tipos de trajetória | 3 tipos de trajetória (linear, espiral, bézier) |
| 1 critério de morte | 3 critérios de morte (tempo de vida >= duração, alpha <= 0, fora do canvas) |