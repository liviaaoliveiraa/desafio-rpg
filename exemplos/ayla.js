//Dados Íniciais de Ayla
let vida = 60 ;
let energia = 40 ;
let xp = 800 ;
let ouro = 200 ;
let nivel = 3 ;

//Parte 1 - Estado de Saúde de Ayla

if (vida >= 80) {
    console.log ("Ayla está em ótimas condições!") ;
} else if (vida >= 40 ) {
    console.log ("Ayla está machucada, mas pode lutar");
} else {
    console.log ("Ayla está em estado crítico, recue!") ;
}

//Parte 2 - Missão

if (vida >= 50 && energia  >= 50 ) {
    console.log ("Ayla entra no calabouço") ;
}else {
    console.log ("Ayla não pode surgir para o calabouço") ;
}

//Parte 3 - Nível

if (xp >= 1000) {
    nivel++ ;
    console.log (`Ayla subiu de nível ${nivel}`) ;
} else {
    console.log (" Adquira mais xp para subir de nível");
}

// Parte 4

if (ouro >= 300) {
    console.log ("Ayla comprou a armadura") ;
} else {
    console.log ("Ayla não tem ouro suficiente");
}