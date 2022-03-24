function dado(){
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    dado = getRandomIntInclusive(1,6)
    return dado
}

function escolha(){
    var personagens = [1, 2, 3]
    while (true){
        var escolha = Number(prompt("Faça uma das ações: "))
        if (personagens.indexOf(escolha) != -1){
            break;
        } else{
            alert("Escolha inválida, escolha novamente entre (1, 2, 3)");
        }
    } return escolha
}

function avalia_escolha1(escolha){
    if (escolha == 1){
        window.location.assign("../../HTML/game_over.html");
    } else if(escolha == 2){
        if (dado() >= 3){
            window.location.assign("../../HTML/Personagem2/fase2.html");
        }else{
            window.location.assign("../../HTML/game_over.html");
        }
    } else{
        window.location.assign("../../HTML/game_over.html");
    }
}

function avalia_escolha2(escolha){
    if (escolha == 1){
        window.location.assign("../../HTML/game_over.html");
    } else if(escolha == 2){
        if (dado() >= 3){
            window.location.assign("../../HTML/game_over.html");
    } else{
            indow.location.assign("../../HTML/Personagem2/fase3.html");    
    }
}


function avalia_escolha3(escolha){
    if (escolha == 1){
        window.location.assign("../../HTML/game_over.html");
    } else if(escolha == 2){
        window.location.assign("../../HTML/game_over.html");
    } else{
        window.location.assign("../../HTML/vitoria.html");
    }
}