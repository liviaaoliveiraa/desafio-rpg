let ouro = 10 ;
let valorEspada = 50 ;
console.log ("Saldo inicial:", ouro ) ;

//quero que ayla compre uma espada (que custa valoEspada), e para isso preciso verificar se ela tem ouro suficiente. Ao comprar vou atualizar o valor de ouro

if (ouro >= valorEspada ) {
    console.log ("Uhull, espada comprada com sucesso") ;
    ouro -= valorEspada ;
    console.log ("Saldo final", ouro) ;
} else {
    let diferenca = valorEspada - ouro ;
    console.log (` Pobre miseravel, faltam ${diferenca} moedas de ouro para voce comprar sua espada`) ;
}
