
let convidados = ["Ana", "Bruno", "Amanda", "Carlos", "Beatriz", "Alberto", "Ricardo"];

const inputNome = document.getElementById('novoNome');
const listaVisual = document.getElementById('listaVisual');
const resultDisplay = document.getElementById('result');

function atualizarInterface() {
    listaVisual.innerHTML = "";
    convidados.forEach(nome => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = nome;
        listaVisual.appendChild(span);
    });
}

function adicionarConvidado() {
    const nome = inputNome.value.trim();
    if (nome !== "") {
        convidados.push(nome);
        inputNome.value = "";
        inputNome.focus();
        atualizarInterface();
    }
}

inputNome.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarConvidado();
});

// --- Lógica de Exibição em Linhas ---

function renderizarLinhas(array) {
    if (array.length === 0) {
        resultDisplay.innerHTML = "Nenhum resultado encontrado.";
        return;
    }
    // Transforma cada nome em uma div separada para garantir a linha única
    resultDisplay.innerHTML = array
        .map(item => `<div class="result-line">> ${item}</div>`)
        .join("");
}

function transformarMaiusculas() {
    const maiusculos = convidados.map(n => n.toUpperCase());
    renderizarLinhas(maiusculos);
}

function contarNomesComA() {
    const total = convidados.filter(n => n.toUpperCase().startsWith("A")).length;
    resultDisplay.innerHTML = `<div class="highlight">Total que começa com 'A': ${total}</div>`;
}

function filtrarNomesLongos() {
    const longos = convidados.filter(n => n.length > 5);
    renderizarLinhas(longos);
}

atualizarInterface();
