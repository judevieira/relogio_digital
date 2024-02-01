const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');
const data = document.getElementById('data');

const relogio = setInterval(function tempo(){
    let dataHoje = new Date();

    let dia = dataHoje.getDate();
    let mes = dataHoje.getMonth() + 1;
    let ano = dataHoje.getFullYear()
    let hr = dataHoje.getHours();
    let min = dataHoje.getMinutes();
    let seg = dataHoje.getSeconds();

    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;
    data.textContent = "DATA: " + dia + "/" + mes + "/" + ano;
})