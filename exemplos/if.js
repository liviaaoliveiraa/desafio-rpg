let ouro = 150 ;
let valorEspada = 50 ;
console.log ("Saldo inicial:", ouro) ;

//quero que ayla compre uma espada (que custa valoEspada), e para isso preciso verificar se ela tem ouro suficiente. Ao comprar vou atualizar o valor de ouro

if (ouro >= 75 ) {
    console.log ("Uhull, espada comprada com sucesso") ;
    ouro -= valorEspada ;
}
console.log (" Saldo final:", ouro) ;