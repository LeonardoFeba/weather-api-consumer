var tempAtual = document.getElementById("tempA");
var tempMin = document.getElementById("tempMin");
var tempMax = document.getElementById("tempMax");
var sensação = document.getElementById("feels");

const obterTemp = () => {
  let inputCidade = document.getElementById("cidade").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCidade}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`;
  fetch(url)
    .then((resposta) => {
      return resposta.json();
    })
    .then((dados) => {
      tempAtual.innerText = dados.main.temp;
      tempMin.innerText = dados.main.temp_min;
      tempMax.innerText = dados.main.temp_max;
      sensação.innerText = dados.main.feels_like;
      console.log(dados);
    })
    .catch((erro) => {
      console.log(erro);
    });
};
