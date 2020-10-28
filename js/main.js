

function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://www.w3schools.com/jsref/jsref_getfullyear.asp");
    window.location.href = "https://www.w3schools.com/jsref/jsref_getfullyear.asp";
}

function trocar(elemento){
    //document.getElementById("MouseMove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar Texto");
}

function voltar(elemento){
    //document.getElementById("MouseMove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/* Funções
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }

    return validar;
}

var idade = prompt("Qual a sua idade ?");
console.log(validaIdade(idade));
*/
//alert(soma(5, 10));

/* Datas
var d = new Date;
//alert(d.getMonth()+1);
//alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));
*/

/* Estrutura de repetição for
var count;
for(count = 1; count <=5; count++){
    alert(count);
}
*/

/* Estrutura de repetição while
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

//Condicionais
/*
var idade = prompt("Qual sua idade");
//var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

//Dicionários
/*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].cor);
*/
/*
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//Arrays
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); //Adiciona um elemento ao array
//lista.pop(); //Exclui o último elemento do array

//console.log(lista); //Printa o array no console do browser
//console.log(lista.reverse()); //Printa o ao contrário
//console.log(lista.toString()); //Printa o array em formato de string
//console.log(lista.join(" - ")); //Printa o array com os separadores definidos pelas aspas da função


//Inteiros e Strings
//var nome = "Vinícius Godoy";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(nome.lenght) //Printa no console o tamanho da String
//console.log(n1 * n2);
//console.log(frase.toUppercase()); 
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));