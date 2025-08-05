let nome = 'Ellie' ;
let classe = 'Mago' ;
let elemento = 'Morte' ;
let nivel = 20 ;
let vida = 100 ;
let ouro = 40 ;
let xp = 60 ;
let experiencia = 10 ;
let manaAtual = 60 ;
let manaMaxima = 90 ;
let vidaMaxima = 100 ;
let localAtual = 'Cidade Impossível, Tenebris'
let sanidade = 70 ;



const NOMEARMA = 'Grimório Decadência' ;
let danoBase = 30 ;
const NOMEARMADURA = 'Capa da Morte' ;
const DEFESABASE = 10 ;

console.log (` 🧾 Início da Jornada de ` + nome ) ;
console.log (` Nível: ${nivel}, Vida: ${vida}, Ouro: ${ouro}, XP: ${xp} e Dano da Espada ${danoBase}`) ;
console.log ( '------------------------------------------------------') ;

xp += 150 ;
ouro -= 30 ;
vida =+ 40 ;
danoBase =+ 60 ;

console.log ( '  🧾 Relatório final da Jornada de' + nome ) ;
console.log ( ` • Personagem: ${nome} `) ;
console.log ( ` • Nível: ${nivel} `) ;
console.log ( ` • XP: ${xp} `) ;
console.log ( ` • Vida: ${vida} `) ;
console.log ( ` • Ouro: ${ouro} `) ;
console.log ( ` • Dano da Espada: ${danoBase} `) ;

console.log('------------------------------------------') ;

let ataqueTotal = nivel + danoBase
let defesaTotal = DEFESABASE + (nivel / 2 ) ;

let vidaSuficiente = vida > 70 ;
let ataqueForte = ataqueTotal > 60 ;
let nivelAvancado = nivel >= 10 ;
podeEnfrentarGuardiao = vidaSuficiente && ( ataque || nivelAvancado) ;

console.log ( ` 🧾 Lore da Personagem:${nome} `) ;
console.log (' ') ;
console.log (` ${nome} , é uma maga guardiã da cidade Impossível paranormal Chamado Tenebris`) ;
console.log (` Sua ${NOMEARMA} é formada do elemento de Morte, onde pode realizar ataques, com o seu ${NOMEARMA} pode impedir ataques de códigos maliciosos paranormais á Tenebris`) ;
console.log (` Com nível de ${nivel} e um ataque total de ${ataqueTotal}, sendo uma Maga misteriosa e sombria`) ;
console.log (` Sua defesa de ${defesaTotal} aumentada pela sua ${NOMEARMADURA}, conseguem atingir 30 pontos de proteção ` ) ;
console.log (` Após treinamentos com entidades paranormais, ${nome} conseguiu alcançar o nível ${xp} de XP e carrega ${ouro} moedas de ouro`) ;
console.log ( ` Com ${vida} pontos de vida, ${nome} tem sido uma das Magas mais dedicadas e promissoras para proteger a cidade impossível de Tenebris`) ;
console.log ( ' Pode enfrentar o guardião? ' , podeEnfrentarGuardiao ) ;
console.log ( ' Vida suficiente? ' , vidaSuficiente) ;
console.log (' Ataque Forte? ', ataqueForte) ;
console.log ( 'Nível Avançado?', nivelAvancado) ;
console.log ('-------------------------------------------')

// Continuação... 

console.log (' 🧾 Resgate e Acressimo dos Dados ')
console.log (`• Nome do Personagem: ${nome} `) ;
console.log (`• Classe do Personagem: ${classe} `) ;
console.log (`• Vida Atual: ${vida} `) ;
console.log (`• Nível: ${nivel}`) ;
console.log (`• Ouro: ${ouro}`) ;
console.log (`• Exeperiencia: ${experiencia}`) ;
console.log (`• Vida Maxima: ${vidaMaxima} `) ;
console.log (`• Mana Atual: ${manaAtual} `) ;
console.log (`• Elemento Paranormal: ${elemento}`) ;
console.log (`• Sanidade Atual: ${sanidade}`) ;

//  Adicionando novos atributos para batalha...

let forca = 15 ;
let defesa = 15 ;
let agilidade = 20 ;
let vigor = 10 ;
let presenca = 50 ;
let combatesVencidos = 0 ;

console.log ('-------------------------------------------') ;

// Capítulo 1 - Condicionais simples
 
console.log ('Capitulo 1: 💫 Aprimorar Arma') ;
console.log (` Enquanto ${nome} estava fazendo a proteção da ${localAtual}, ela acha necessário aprimorar sua ${NOMEARMA} com novos rituais, pois sente  que uma batalha se aproxima `) ;

// Verificação de classe...

if (classe === 'Mago'){
    console.log (`💫 ${nome} sabe que consegue amaldiçoar e aprimorar sua arma por conta de sua classe sem ter nenhuma penalidade com isso`) ;
}

// No RPG em que eu estou me inspirando, caso o personagem não tivesse um certo treinamento na área em que a missão é feita (no caso os feitiços e amaldicionamentos de coisas), ele pode perder pontos de vida 

// Verificação do nível de mana do personagem...

if ( manaAtual >= 30 ){
    console.log (` 💫 ${nome} consegue aprimorar o ${NOMEARMA} com maestria!`) ;
}

// Descrição de como a arma foi amaldiçoada...

if (elemento === 'Morte'){
    console.log ( ` Após amaldiçoar o ${NOMEARMA} símbolos antigos se acendem na cor preta, mas como se fossem escritos por sangue, sangue seco. O elemento de ${elemento} percorre as páginas, amaldiciçoando o ${NOMEARMA} com novos códigos e feitiços`)
}

// Usei essa situação com o if, pois,se o elemento fosse diferente a esse, a descrição seria completamente diferente

console.log ('-------------------------------------------') ;

// Capítulo 2 - Condicionais Compostas

console.log ('Capítulo 2 - 💫 Verificação de Condição ') ;
console.log (`Após ${nome} conseguir amaldiçoar seu ${NOMEARMA}, sentindo cada vez mais proxima da batalha, para garantir que ${localAtual} não seja engolida de vez pelo o Outro lado,mantendo ela na medida do possível, equilibrada`) ;

// O outro Lado dentro na minha lore,seria um mundo paranormal onde existem criaturas também paranormais que procurram corromper Tenebris e usar ela ao seu favor, porém em Tenebris dento do universo em que estou me inspirando eles se manifestam com mais força 

// Verificação de sanidade antes do combate...

if (sanidade >=50 ){
    console.log (`${nome} respira fundo e consegue controlar seus sentimentos e o chamado do Outro Lado. No fundo, algo dentro dela deseja responder esse chamado, deixar-se consumir pelo Outro Lado, porém ela consegue resistir`) ;
}else {
    console.log (`${nome} sente sua mente ser parcialmente consumida,corrompida pelo Outro lado,pelas palavras,pelos códigos que o grimório sussurra. Isso foi consequência de não saber lidar com sua magia e a sua mente`) ;
    sanidade -= 10 ;
}

// Reforço para a membrana de Tenebris...

//Membrana no RPG que estou me inspirando,é como se fosse uma barreira que separa o mundo normal do mundo paranormal,porém em Tenebris ela é muito mais enfraquecida

console.log (`Após ${nome} preparar sua Sanidade e sua mente para o combate que se aproxima cada vez mais, ela decide fortalecer a membrana de ${localAtual}, já que devido a influência paranormal constante, ela se encontra fragilizada`) ;

if ( sanidade < 60) {
    console.log (`${nome} com o ${NOMEARMA} em mãos, tenta usar um feitiço que reforçe a membrana temporariamente, mas ela não cnsegue realizar o ritual, a energia do elemento de ${elemento} flui de maneira errada, parta da mana de ${nome} é drenada pelo Outro Lado`) ;
    manaAtual = manaAtual - 30 ;
    console.log ('Mana Atual:', manaAtual) ;
} else {
    console.log (` ${nome} se conecta ao ${NOMEARMA} e ao seu elemento, e começa a sentir seu poder canalizando e consegue fortalacer temporariamente a membrana`) ;
}