
function escolhe_personagem(){
    var personagens = [1, 2, 3]
    while (true){
        var escolha = Number(prompt("Digite o número do personagem que deseja escolher: "))
        if (personagens.indexOf(escolha) != -1){
            break;
        } else{
            alert("Personagem inválido, escolha novamente entre (1, 2, 3)");
        }
    } 
    return escolha
}

function avanca(escolha){
    if (escolha == 1){
        window.open("http://127.0.0.1:5500/HTML/Personagem1/fase1.html","_self");
    } else if(escolha == 2){
        window.open("http://127.0.0.1:5500/HTML/Personagem2/fase1.html","_self");
    } else{
        window.open("http://127.0.0.1:5500/HTML/Personagem3/fase1.html","_self");
    }
}

var escolha = escolhe_personagem()
avanca(escolha)