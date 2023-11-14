const form = document.getElementById('form-contato')

const contato = [];
const tel = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('telefone')

    if (contato.includes(inputTelefone.value)) {
        alert(`O contato: ${inputTelefone.value} já foi adicionado`)
    } else {

        contato.push(inputNome.value);
        tel.push(parseFloat(inputTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';

}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}
