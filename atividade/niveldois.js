let nome = ' Ellie ' ;
let classe = ' Mago ' ;
let nivel = 20 ;
let vida = 100 ;
let ouro = 40 ;
let xp = 60 ;
let experiencia = 10 ;
let manaAtual = 60 ;
let manaMaxima = 90 ;
let vidaMaxima = 100 ;
let localAtual = ' Cidade Impossível, Tenebris '


const NOMEARMA = 'Grimório Decadência' ;
let danoBase = 30 ;
const NOMEARMADURA = ' Capa da Morte' ;
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

console.log ( ` 🧾 Lore do Personagem ${nome} `) ;
console.log (' ') ;
console.log (` ${nome} , é uma maga guardiã da cidade Impossível paranormal Chamado Tenebris`) ;
console.log (` Sua ${NOMEARMA} é formada do elemento de Morte, onde pode realizar ataques, com o ${NOMEARMA} pode impedir ataques de códigos maliciosos paranormais á Tenebris`) ;
console.log (` Com nível de ${nivel} e um ataque total de ${ataqueTotal}, sendo uma Maga misteriosa e temida`) ;
console.log (` Sua defesa de ${defesaTotal} aumentada pela sua ${NOMEARMADURA}, atingem 30 pontos de proteção ` ) ;
console.log (` Após treinamentos com entidades paranormais, ${nome} conseguiu alcançar nível ${xp} de xp e tem com ela ${ouro} moedas de ouro`) ;
console.log ( ` Com ${vida} pontos de vida, ${nome} tem sido uma das Magas mais dedicadas e eficientes para proteger a cidade impossível de Tenebris`) ;
console.log ( ' Pode enfrentar o guardião? ' , podeEnfrentarGuardiao ) ;
console.log ( ' Vida suficiente? ' , vidaSuficiente) ;
console.log (' Ataque Forte? ', ataqueForte) ;
console.log ( 'Nível Avançado?', nivelAvancado) ;
console.log ('-------------------------------------------')

//continuação... 

console.log (' 🧾 Resgate e Acressimo dos Dados ')
console.log (`• Nome do Personagem: ${nome} `) ;
console.log (`• Classe do Personagem: ${classe} `) ;
console.log (`• Vida Atual: ${vida} `) ;
console.log (`• Nível: ${nivel}`) ;
console.log (`• Ouro: ${ouro}`) ;
console.log (`• Exeperiencia: ${experiencia}`) ;
console.log (`• Vida Maxima: ${vidaMaxima} `) ;
console.log (`• Mana Atual: ${manaAtual} `) ;
console.log (`• Mana Maxima: ${manaMaxima}`) ;

// Adicionando novos atributos para batalha...

let forca = 15 ;
let defesa = 15 ;
let agilidade = 20 ;
let vigor = 10 ;
let presenca = 50 ;
let combatesVencidos = 0 ;

//Capítulo 1 - Condicionais simples
 
console.log ('Capitulo 1: 💫 Aprimorar Arma')
console.log (` Enquanto ${nome} estava fazendo a proteção da ${localAtual}, ela acha necessário aprimorar sua ${NOMEARMA} com novos rituais, pois sente  que uma batalha se aproxima `) ;

//Verificação de classe

if (classe === 'Mago') {
    console.log (`💫 ${nome} sabe que consegue amaldiçoar e aprimorar sua arma por conta de sua classe`) ;
}

//Verificação do nível de mana do personagem

if ( manaAtual >= 30 ){
    console.log (` 💫 ${nome} consegue aprimorar o ${NOMEARMA} com maestria!`) ;
}

//
