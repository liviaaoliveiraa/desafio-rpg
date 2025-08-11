let nome = 'Ellie' ;
let classe = 'Mago' ;
let elemento = 'Morte' ;
let nivel = 40 ;
let vida = 100 ;
let ouro = 40 ;
let xp = 60 ;
let experiencia = 30 ;
let manaAtual = 60 ;
let manaMaxima = 90 ;
let vidaMaxima = 100 ;
let localAtual = 'Cidade Impossível, Tenebris'
let sanidade = 70 ;



const NOMEARMA = 'Grimório Decadência' ;
let danoBase = 30 ;
const NOMEARMADURA = 'Capa da Morte' ;
const DEFESABASE = 10 ;

console.log (`🧾 Início da Jornada de` + nome ) ;
console.log (`• Vida: ${vida}`) ;
console.log (`• Nível: ${nivel}`) ;
console.log (`• Ouro: ${ouro},`) ;
console.log (`• XP: ${xp}`) ;
console.log (`• Dano da Espada ${danoBase}`) ;
console.log ( '------------------------------------------------------') ;
console.log (' ') ;

xp += 150 ;
ouro -= 30 ;
vida += 40 ;
danoBase += 60 ;

console.log ( '🧾 Relatório final da Jornada de' + nome ) ;
console.log (' ') ;
console.log ( `• Personagem: ${nome} `) ;
console.log ( `• Nível: ${nivel} `) ;
console.log ( `• XP: ${xp} `) ;
console.log ( `• Vida: ${vida} `) ;
console.log ( `• Ouro: ${ouro} `) ;
console.log ( `• Dano da Espada: ${danoBase} `) ;

console.log('------------------------------------------') ;
console.log (' ') ;

let ataqueTotal = nivel + danoBase
let defesaTotal = DEFESABASE + (nivel / 2 ) ;

let vidaSuficiente = vida > 70 ;
let ataqueForte = ataqueTotal > 60 ;
let nivelAvancado = nivel >= 10 ;
podeEnfrentarGuardiao = vidaSuficiente && ( ataqueForte || nivelAvancado) ;

console.log ( `🧾 Lore da Personagem:${nome}`) ;
console.log (' ') ;
console.log (`${nome} , é uma maga guardiã da Chamada ${localAtual}`) ;
console.log (`Seu ${NOMEARMA} é formado do elemento de Morte, onde pode realizar ataques. Com o seu ${NOMEARMA} pode impedir ataques de códigos maliciosos paranormais á Tenebris`) ;
console.log (' ') ;
console.log (`Com nível de ${nivel} e um ataque total de ${ataqueTotal}, ${nome} é uma Maga misteriosa e sombria`) ;
console.log (`Sua defesa de ${defesaTotal} aumentada pela sua ${NOMEARMADURA}, conseguem atingir 30 pontos de proteção` ) ;
console.log (`Após treinamentos com entidades paranormais, ${nome} conseguiu alcançar o nível ${xp} de XP e carrega ${ouro} moedas de ouro`) ;
console.log (' ') ;
console.log ( `Com ${vida} pontos de vida, ${nome} tem sido uma das Magas mais dedicadas e promissoras para proteger a cidade impossível de Tenebris`) ;
console.log (' ') ;
console.log ('Pode enfrentar o guardião?' , podeEnfrentarGuardiao ) ;
console.log ('Vida suficiente?' , vidaSuficiente) ;
console.log ('Ataque Forte?', ataqueForte) ;
console.log ('Nível Avançado?', nivelAvancado) ;
console.log ('-------------------------------------------')

// Continuação... 

console.log ('🧾 Resgate e Acressimo dos Dados')
console.log (' ') ;
console.log (`• Nome do Personagem: ${nome}`) ;
console.log (`• Classe do Personagem: ${classe}`) ;
console.log (`• Vida Atual: ${vida}`) ;
console.log (`• Nível: ${nivel}`) ;
console.log (`• Ouro: ${ouro}`) ;
console.log (`• Exeperiencia: ${experiencia}`) ;
console.log (`• Vida Maxima: ${vidaMaxima}`) ;
console.log (`• Mana Atual: ${manaAtual}`) ;
console.log (`• Elemento Paranormal: ${elemento}`) ;
console.log (`• Sanidade Atual: ${sanidade}`) ;

// O elemento paranormal, seria uma força primordial que formam a base da magia no meu universo, existem quatro elementos e cada um deles possui características e propriedades diferentes defenindo a forma de como o paranormal se manifesta no mundo do jogo 

//  Adicionando novos atributos para batalha...

let forca = 40 ;
let defesa = 40 ;
let agilidade = 20 ;
let vigor = 10 ;
let presenca = 50 ;
let combatesVencidos = 0 ;

console.log ('-------------------------------------------') ;

// Capítulo 1 - Condicionais simples
 
console.log ('Capitulo 1: 💫 Aprimorar Arma') ;
console.log (`Enquanto ${nome} estava fazendo a proteção da ${localAtual}, ela acha necessário aprimorar sua ${NOMEARMA} com novos rituais, pois sente que uma batalha se aproxima`) ;
console.log (' ') ;

// Verificação de classe...

if (classe === 'Mago'){
    console.log (`💫 ${nome} sabe que consegue amaldiçoar e aprimorar sua arma por conta de sua classe sem ter nenhuma penalidade com isso`) ;
    console.log (' ') ;
}

// No RPG em que eu estou me inspirando, caso o personagem não tivesse um certo treinamento e conhecimento na área em que a missão é feita (no caso os feitiços e amaldiçionamentos de coisas), ele pode perder pontos de vida 

// Verificação do nível de mana do personagem...

if ( manaAtual >= 30 ){
    console.log (`💫 ${nome} consegue aprimorar o ${NOMEARMA} com maestria!`) ;
    console.log (' ') ;
}

// Descrição de como a arma foi amaldiçoada...

if (elemento === 'Morte'){
    console.log (`Após amaldiçoar o ${NOMEARMA} símbolos antigos se acendem na cor preta, como se eles fossem escritos por sangue, sangue seco. O elemento de ${elemento} percorre as páginas, amaldiciçoando o ${NOMEARMA} com novos códigos e feitiços`) ;
}

// Usei essa situação com o if, pois,se o elemento fosse diferente a esse, a descrição seria completamente diferente

console.log ('-------------------------------------------') ;

// Capítulo 2 - Condicionais Compostas

console.log ('Capítulo 2 - 💫 Verificação de Condição') ;
console.log (`Após ${nome} conseguir amaldiçoar seu ${NOMEARMA}, sentindo cada vez mais próxima da batalha, para garantir que a ${localAtual} não seja engolida de vez pelo o Outro lado,mantendo ela na medida do possível, equilibrada`) ;

// O outro Lado dentro da minha lore,seria um mundo paranormal onde existem criaturas também paranormais que procurram corromper Tenebris e usar ela ao seu favor, porém em Tenebris dento do universo em que estou me inspirando eles se manifestam com mais força 

// Verificação de sanidade antes do combate...

if (sanidade >=50 ){
    console.log (`💫 ${nome} respira fundo e consegue controlar seus sentimentos e o chamado do Outro Lado. No fundo, algo dentro dela deseja responder esse chamado, deixar-se consumir pelo Outro Lado, porém ela consegue resistir`) ;
    console.log (' ') ;
}else {
    console.log (`${nome} sente sua mente ser parcialmente consumida,corrompida pelo Outro lado,pelas palavras,pelos códigos que o grimório sussurra. Isso foi consequência de não saber lidar com sua magia e a sua mente`) ;
    console.log (' ') ;
    sanidade -= 10 ;
}

// Reforço para a membrana de Tenebris...

//Membrana no RPG que estou me inspirando,é como se fosse uma barreira que separa o mundo normal do mundo paranormal,porém em Tenebris ela é muito mais enfraquecida

console.log (`Após ${nome} preparar sua Sanidade e sua mente para o combate que se aproxima cada vez mais, ela decide fortalecer a membrana de ${localAtual}, já que devido a influência paranormal constante, ela se encontra fragilizada`) ;
console.log (' ') ;

if ( sanidade < 60) {
    console.log (`${nome} com o ${NOMEARMA} em mãos, tenta usar um feitiço que reforçe a membrana temporariamente, mas ela não consegue realizar o ritual, a energia do elemento de ${elemento} flui de maneira errada, parta da mana de ${nome} é drenada pelo Outro Lado`) ;
    console.log (' ') ;
    manaAtual = manaAtual - 30 ;
    console.log ('Mana Atual:', manaAtual) ;
} else {
    console.log (`💫 ${nome} se conecta ao ${NOMEARMA} e ao seu elemento, e começa a sentir seu poder canalizando e consegue fortalacer temporariamente a membrana`) ;
    console.log (' ') ;
}

console.log ('-------------------------------------------') ;

// Capítulo 3 - Condicionais encadeadas

console.log ('Capítulo 3 - 💫 Batalha') ;
console.log (`${nome} sente a membrana enfraquecer mesmo com a sua proteção, ficando com cada vez mais neblina na ${localAtual}`) ;

let poderInimigo = 30 ;
let poderTotal = forca + defesa + agilidade + vigor + presenca ;

// Novamente, no RPG que estou me inspirando, a aparição de neblina em um local significa que a membrana está fraca, e que a aparição de eventos ou criaturas paranormais pode estar prestes a acontecer

console.log (`Derrepente, é como se tudo tivesse sido repleto de sangue na visão de ${nome}, como se o mundo de tivesse sido derretido por um momento. Então surge uma criatura,com uma silhueta quase humanoide no meio da neblina, exeto pelo fato de suas garras serem enormes,sua pele avermelhada e seu jeito encurvado e corcunda de andar, e enquanto a criatura ia se aproximando era cada vez mais possível de ver sua face,porém a criatura não tinha um rosto, ela tinha apenas dentes enormes no lugar da cara, como se o rosto dela fosse uma boca enorme e nojenta`) ;
console.log (' ') ;

if ( poderTotal > poderInimigo + 38 ) {
    console.log (`${nome} concentra todo o seu poder, e então decide conjurar um ritual de seu elemento de ${elemento}. Com seu ${NOMEARMA} ao seu lado, ela conjura um ritual onde cria uma cópia da criatura entre as palmas da sua mão`) ;
    console.log (' ') ;
    console.log (`Enquanto a criatura caminhava lentamente em sua direção, com uma postura torta e cambalejando, ${nome} se concentra enquanto olha fixamente para a criatura, pega um pouco de poeira que está no chão e faz uma projeção negra da criatura entra as suas palmas`) ;
    console.log (` Enquanto ${nome} se concentra em realizar seu ritual sua aparência muda,seus olhos ficam por inteiro pretos, suas orelhas começam a ficar pontudas,o tom de seus cabelos começam a mudar para tons de preto e tatuagens com simbulos paranormais começam a aparecer em todo seu seu corpo.Isso enquanto o ritual estava acontecendo`) ;
    console.log (' ') ;
    console.log (` O ${NOMEARMA} começa a brilhar em tons frios como preto e branco nas gravuras de sua capa, e as páginas dele comçam a ser folhetadas sozinhas enquanto ${nome} faz o ritual`) ;
    console.log (' ') ;
    console.log (`Assim que a cópia da criatura fica pronta entre as palmas das mãos de ${nome} ela "estoura" o ritual, fechando a palma das mãos bem quando a criatura estava em sua frente prestes a atacar. A criatura acaba sendo corroída por dentro pela morte.destruída antes que pudesee prejudicar mais ${localAtual}`) ;
    console.log (' ') ;
} else if (poderTotal >= poderInimigo && poderTotal <= poderInimigo + 30 ) {
    console.log (`${nome} concentra todo o seu poder, e então decide conjurar um ritual de seu elemento de ${elemento}. Com seu ${NOMEARMA} ao seu lado, ela conjura um ritual onde cria uma cópia da criatura entre as palmas da sua mão`) ;
    console.log (' ') ;
    console.log (`Enquanto ${nome} estava fazendo uma cópia da criatura entra suas palmas, ela não consegue realizar o ritual a tempo de acabar de vez com a criatura e fechar as palmas das mãos para mata-la e então, acaba sendo ferida pela criatura, porém ${nome} não desiste `) ;
    console.log (' ') ;
    console.log (`${nome} canaliza o resto da sua mana e do seu elemento de ${elemento} e invoca um feitiço e joga sobre a criatura`) ;
    console.log (' ') ;
    console.log (`A criatura recua, ferida e quase desacordada pelo dano de morte que ${nome} deu nela... mais ainda viva`) ;
    console.log (`${localAtual} permanece em risco, principalmente pela vúlnerabilidade da membrana e da criatura viva`) ;
    vida =- 10 ;
} else {
    console.log (`${nome} concentra todo o seu poder, e então decide conjurar um ritual de seu elemento de ${elemento}. Com seu ${NOMEARMA} ao seu lado, ela conjura um ritual onde cria uma cópia da criatura entre as palmas da sua mão`) ;
    console.log (`${nome} cai de joelhos antes mesmo de completar o ritual contra a criatura, ${nome} nem parece perceber a velocidade que a criatura chega até ela,pois quando ela olha para aquela criatura nojenta e humanoide, ela já está em cima de ${nome}`) ;
    console.log (' ') ;
    console.log (`O ${NOMEARMA} começa a vibrar,tremer e a levitar, ${nome} escuta vindo do ${NOMEARMA} que está ao seu lado, palavras que ela não consegue compreender`) ;
    console.log (`${nome} já sem forças, sua magia falha e a criatura ataca brutalmente. A Barreira de proteção a membrana se rompe. E o outro lado começa a cosumir ${localAtual} sem alguém para protege-la`) ;
    sanidade -= 10 ;
    vida -= 30 ;
    console.log (`Sanidade e Vida Diminuiída. Atual:`, sanidade && vida) ;
}

//Esse ritual realmente exite no universo em que me inspiro,porém ele não é exatamente como descrevi, mas acho a narrativa dele muito boa e interessante

console.log ('-------------------------------------------') ;

//Continuação...

console.log ('🧾 Resgate e Atualização dos Dados')
console.log (' ') ;
console.log (`• Nome do Personagem: ${nome}`) ;
console.log (`• Classe do Personagem: ${classe}`) ;
console.log (`• Vida Atual: ${vida}`) ;
console.log (`• Nível: ${nivel}`) ;
console.log (`• Ouro: ${ouro}`) ;
console.log (`• Exeperiencia: ${experiencia}`) ;
console.log (`• Vida Maxima: ${vidaMaxima}`) ;
console.log (`• Mana Atual: ${manaAtual}`) ;
console.log (`• Elemento Paranormal: ${elemento}`) ;
console.log (`• Sanidade Atual: ${sanidade}`) ;

//Novos elementos para esse capítulo...

//Inimigos do outro lado...

let entidadesDoOutroLado = [
    { nome: 'Gal', poder: 35 } ,
    { nome: 'Tbag', poder: 20} ,
]

let inventario = [ 'Capa da Morte', 'Grimório Decadência','40 Moedas de Ouro', 'joia Luminosa' ] ;

let itemEncontrado = "Amuleto de Morte" ;

let tesouros = [
    { nome: 'Ritual de Cura'} ,
    { nome: 'Essência de Membrana', valor: 120 } ,
    { nome: 'Olho dessecado', valor: 250 } ,
]

let tesouro = tesouros[Math.floor(Math.random() * tesouros.length)] ;

//A essência de membrana seria um pequeno frasco contendo uma substância negra e viscosa, lembrando os elementos de mortes, que parece se mover sozina. No RPG  ela é usada para enfraquecer a membrana ou enfraquece-la. E o olho dessecado seria um olho, que ao possui-lo a pessoa poderia ver presenças paranormais 

let eventosAleatorios = [
    `${nome} ouve passos distantes,mas não escuta ninguém...` ,
    `Um vento gelado passa por ${nome}, mas é como se junto deste vento um susurro desconhecido pessase pelos seus ouvidos ` ,
    ` Um uivo distante ecoa pelo local onde ${nome} está, como se fosse de uma criatura, e por um instante ${nome} sente que não está sozinha, mas esse sentimento logo passa enquanto caminha `
] ;

let evento = eventosAleatorios[Math.floor(Math.random() * eventosAleatorios.length)] ;

//Capítulo Final...

console.log ('Capítulo Final - 💫 Pós Guerra') ;
console.log (`Após a vitória da guerra final,${localAtual} fica relativamente segura, até o momento`) ;
console.log (' ') ;
console.log (`A membrana permanece do mesmo jeito que sempre esteve, porém era como se ${nome} sentisse abrir sútis fissuras na membrana, como se algo tivesse entrando por elas...`) ;
console.log (' ') ;
console.log (`Dessas fissuras, duas entidades ligadas ao Outro Lado,que usam o poder do paranormal para o mal, surgem,atraídas pela energia e vulnerabilidade da última batalha, tentando invandir para danificar e acabar com o umas dos maiores locais paranormais existente,${localAtual}`) ;
console.log (' ') ;

//For tradicional...

for (let i = 0; i <entidadesDoOutroLado.length; i++){
    let inimigo = entidadesDoOutroLado[i] ;
    console.log (`${nome} enfrenta: ${inimigo.nome} (Poder:${inimigo.poder})`) ;


if (poderTotal >= inimigo.poder + 10) {
    console.log (`${nome} derrota ${inimigo.nome} seu inimigo, com facilidade, expulsando-o de seu território sem muito alvoroço, a membrana continua do mesmo jeito que sempre esteve`) ;
    xp += 20 ;
} else {
    console.log (`${nome} é ferida na luta contra${inimigo.nome}, mas consegue expulsa-los com muito esforço e luta`) ;
    vigor -= 5 ;
    vida -= 30 ;
}
}

//Adquirindo um dos Tesouros..

console.log (`Ao derrotar os inimigos, enquanto se limpava e se ajeitava da pequena batalha que acabou de acontecer, ${nome} escutas leves susurros em seu ouvido, susurros que diziam "Recompensas". ${nome} já tina escutado esses susurros, ela sabia que era as entidades de seu elemento falando com ela. As entidades de seu elemento de ${elemento} querem recompensa-la pelas batalhas que ${nome} veem vencido e a sua evolução`) ;
console.log (' ') ;

console.log (`Ao caminhar um pouco ${nome} adquire um ${tesouro.nome} `)

//Métodos de Array...

console.log (`Após a pequena batalha que ${nome} teve com entidades ligadas ao Outro Lado, ela continua fazendo sua proteção a ${localAtual}, rondando e observando o locar para averiguar que não tem nada fora do comum `) ;
console.log (' ') ;
console.log (`Enquanto ${nome} estava andando pela ${localAtual}, ela acaba encontrando um Amuleto Misterioso jogado no chão. ${nome} então, decide pega-lo e analisa-lo`) ;
console.log (`Enquanto ${nome} estava analisando o ${itemEncontrado}, ela percebe que o elemento paranormal presente neste amuleto seria o de ${elemento},seu próprio elemento, por isso, ela decide ficar com o objeto, pensando que o ${itemEncontrado} poderia dar algum tipo de vantagem para ela`) ;
console.log (' ') ;
console.log (`Porém ${nome} percebe que não conseguiria levar tantos objetos com ela`) ;
console.log (`${nome} decide largar a sua Joia Luminosa e pegar o ${itemEncontrado}`) ;
vida += 10 ;

//Removendo o último item..
let itemRemovido = inventario.pop ();

//Colocando o item encontrado no inventário...
inventario.push (itemEncontrado) ;

console.log ('Inventário Atual:', inventario) ;

//Usando for...of ...

for (let inimigo of entidadesDoOutroLado){
    console.log (`${nome}, enquanto caminhava pela ${localAtual},observa as marcas das fissuras na membrana deixadas por (${inimigo.nome}  antes das mesmas desaparecerem. Se ${nome} não tivesse treinamento, conhecimento e afinidade com o Outro lado e o paranormal, ${nome} não poderia sequer sentir ou ver a membrana `) ;
    console.log (' ') ;
}

//Evento aleatório para continuar a narração...

console.log (evento) ;

//Final...
console.log (`Com todas as entidades e criaturas derrotadas, ${nome} consegue restaurar o que sobrou das fissuras das membranas, apesar da eterna fragilidade da membrana de ${localAtual}`) ;
console.log (`Apesar disso, ${nome} continua fazendo a proteção de ${localAtual}. O silêncio retorna, e a escuridão do outro lado da membrana permanece por lá`) ;

//Estátsticas finais...

console.log (`🧾 Estátisticas Finais de ${nome} !`)
console.log (' ') ;
console.log (`• Nome do Personagem: ${nome}`) ;
console.log (`• Classe do Personagem: ${classe}`) ;
console.log (`• Vida Final: ${vida}`) ;
console.log (`• Nível Final: ${nivel}`) ;
console.log (`• Ouro Acumulado: ${ouro}`) ;
console.log (`• Exeperiencia Final: ${experiencia}`) ;
console.log (`• Vida Maxima: ${vidaMaxima}`) ;
console.log (`• Mana Final: ${manaAtual}`) ;
console.log (`• Elemento Paranormal: ${elemento}`) ;
console.log (`• Sanidade Final: ${sanidade}`) ;
console.log (`• XP Acumulado: ${xp}`) ;
console.log (' ') ;
console.log (`💫 Até a próxima jornada ${nome} !`) ;
