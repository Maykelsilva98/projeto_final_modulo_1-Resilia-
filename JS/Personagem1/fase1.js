function decisao(){
    var personagens = [1, 2, 3]
    while (true){
        var escolha = Number(prompt("Faça uma das ações: "))
        if (personagens.indexOf(escolha) != -1){
            break;
        } else{
            alert("Escolha inválida, escolha novamente entre (1, 2, 3)");
        }
    } 

    if (escolha == 1){
        window.location.assign("../../HTML/game_over.html");
    } else if(escolha == 2){
        window.location.assign("../../HTML/game_over.html");
    } else{
        window.location.assign("../../HTML/Personagem1/fase2.html");
    }
}

