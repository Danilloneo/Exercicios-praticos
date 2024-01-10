const form = document.getElementById('form-verificador');
const primeiroValor = document.getElementById('valorUm');
const segundoValor = document.getElementById('valorDois');
//const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

function validaValor(valorCompleto){
    const comparaValores = primeiroValor.value < segundoValor.value
    return comparaValores;
}

form.addEventListener('submit', function(e) {
e.preventDefault();


const mensagemSucesso = `Maravilha, o valor do campo <b>B = ${segundoValor.value}</b> é maior que o do campo <b>A = ${primeiroValor.value}</b>  conforme solitado!`;


formValido = validaValor(segundoValor.value) //aqui vai a comparação de valores
if (formValido) {
const containerMensagemSucesso = document.querySelector('.sucess-message')
containerMensagemSucesso.innerHTML = mensagemSucesso;
containerMensagemSucesso.style.display = 'block';
document.querySelector('.error-message').style.display = 'none';
valorUm.value = '';
valorDois.value = '';
}

else {
    primeiroValor.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.sucess-message').style.display = 'none';
    valorUm.value = '';
}
})


