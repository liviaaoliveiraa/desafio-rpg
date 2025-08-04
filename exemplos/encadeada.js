let ouro = 10 ;
let valorEspada = 50 ;
console.log ("Saldo inicial:", ouro ) ;
let xp = 10 ;

//quero que ayla compre uma espada (que custa valoEspada), e para isso preciso verificar se ela tem ouro suficiente. Ao comprar vou atualizar o valor de ouro

if (ouro >= valorEspada && xp >= 80) {
    console.log ("Uhull, espada comprada com sucesso") ;
    ouro -= valorEspada ;
    console.log ("Saldo final", ouro) ;
} else if (ouro >= valorEspada && xp <=50) {
    console.log (" Voce pode ter dinheiro, mas não tem xp suficiente para essa compra !") ;
}else {
    let diferenca = valorEspada - ouro ;
    console.log (` Pobre miseravel, faltam ${diferenca} moedas de ouro para voce comprar sua espada`) ;
}