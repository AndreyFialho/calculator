var resposta = "POR FAVOR, SELECIONE UMA OPERAÇÃO";

function calculoSoma() {
    var first = document.getElementById("num1").value;
    var second = document.getElementById("num2").value;

    if(isNaN(first) || isNaN(second))
    {
        resposta = "O VALOR INFORMADO DEVE SER NUMÉRICO";
        return resposta;
    }
    else if((first == "") || (second == "")){
        resposta = "VOCÊ DEVE INFORMAR OS DOIS CAMPOS PARA EFETUAR O CÁLCULO";
        return resposta;
    }
    else
    {
        first = parseFloat(first);
        second = parseFloat(second);
        var sum = (first + second);
        sum = sum.toFixed(2);
        resposta = "O resultado é " + sum;
        return resposta;
    }
}

function calculoSubtracao() {
    var first = document.getElementById("num1").value;
    var second = document.getElementById("num2").value;

    if(isNaN(first) || isNaN(second))
    {
        resposta = "O VALOR INFORMADO DEVE SER NUMÉRICO";
        return resposta;
    }
    else if((first == "") || (second == "")){
        resposta = "VOCÊ DEVE INFORMAR OS DOIS CAMPOS PARA EFETUAR O CÁLCULO";
        return resposta;
    }
    else
    {
        first = parseFloat(first);
        second = parseFloat(second); 
        var sum = (first - second);
        sum = sum.toFixed(2);
        resposta = "O resultado é " + sum;
        return resposta;
        
    }
}

function calculo(){

    if(onclick="calculoSoma()"){
            mensagem.textContent = resposta;
            first += "";
            second += "";
            mensagem.textContent ="POR FAVOR, SELECIONE UMA OPERAÇÃO"
        }
    else if(onclick="calculoSubtracao()"){
        mensagem.textContent = resposta;
        first += "";
        second += "";
        mensagem.textContent ="POR FAVOR, SELECIONE UMA OPERAÇÃO"
    }
    else{
        mensagem.textContent = resposta;
        first += "";
        second += "";
        mensagem.textContent = "POR FAVOR, SELECIONE UMA OPERAÇÃO"   
    }
    }


