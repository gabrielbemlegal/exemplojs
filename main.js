function helloWorld() {
    alert('Olá, Mundo!');
}

function soma() {
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;

    document.getElementById('resultado').value = eval(valor1+ '+' +valor2);
}

function alterarId() {
    document.getElementById('alteraId').style.color = 'rgb(42, 119, 219)';
}

function alterarNome() {
    var elements = document.getElementsByName('alteraNome');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = 'rgb(42, 119, 219)';
    }
}

function alterarClasse() {
    var elements = document.getElementsByClassName('alteraClasse');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = 'rgb(42, 119, 219)';
    }
}