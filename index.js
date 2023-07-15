function cor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    switch (cor){
        case "vermelho":
            document.body.style.backgroundColor = "red"
        break;
        
        case "azul":
            document.body.style.backgroundColor = "blue"
        break;
        
        case "verde":
            document.body.style.backgroundColor = "green"
        break;
        
        default:
            document.getElementById("erro").innerHTML = "Cor nao encontrada";
    }
}