// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let numberCampoSaldo: number = Number(campoSaldo.innerHTML);
numberCampoSaldo = 0;

function somarAoSaldo(soma: number) {
    numberCampoSaldo += soma;
    campoSaldo.innerHTML = numberCampoSaldo.toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

