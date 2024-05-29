var elementos = document.querySelectorAll(".player div > img");
var selectOpt = "";
var inimigoOpt = "";


alert("Para jogar selecione uma das opções ao lado esquerdo")

function validarVitoria() {
  
  

  let vencedor = document.querySelector(".resultado");

  if (selectOpt == "Papel") {
    if (inimigoOpt == "Papel") {
      vencedor.innerHTML= "O Jogo Empatou";
      vencedor.style.color = "white";    

    } else if (inimigoOpt == "Pedra") {
      vencedor.innerHTML = "O Player Venceu";
      vencedor.style.color = "green";

    } else if (inimigoOpt == "Tesoura") {
      vencedor.innerHTML = "O Adversário Venceu";
      vencedor.style.color = "red";

    }

  }

  if (selectOpt == "Pedra") {
    if (inimigoOpt == "Papel") {
      vencedor.innerHTML = "O Adversário Venceu";
      vencedor.style.color = "red";

    } else if (inimigoOpt == "Pedra") {
      vencedor.innerHTML = "O Jogo Empatou";
      vencedor.style.color = "white";

    } else if (inimigoOpt == "Tesoura") {
      vencedor.innerHTML = "O Player Venceu";
      vencedor.style.color = "green";
    }
  }

  if (selectOpt == "Tesoura") {
    if (inimigoOpt == "Papel") {
      vencedor.innerHTML = "O Player Venceu";
      vencedor.style.color = "green";

    } else if (inimigoOpt == "Pedra") {
      vencedor.innerHTML = "O Adversário Venceu";
      vencedor.style.color = "red";

    } else if (inimigoOpt == "Tesoura") {
      vencedor.innerHTML = "O Jogo Empatou";
      vencedor.style.color = "white";
    }
  }
}

function resetInimigo() {
  const enemyOptions = document.querySelectorAll(".inimigo div > img");
  for (var i = 0; i < enemyOptions.length; i++) {
    enemyOptions[i].style.opacity = 0.5;
  }
}

function inimigoJogar() {
  let rand = Math.floor(Math.random() * 3);
  const enemyOptions = document.querySelectorAll(".inimigo div > img");
  resetInimigo();

  for (var i = 0; i < enemyOptions.length; i++) {
    if (i == rand) {
      enemyOptions[i].style.opacity = 1;
      inimigoOpt = enemyOptions[i].getAttribute("opt");
    }
  }

  validarVitoria();
}

function resetOpacity() {
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.opacity = 0.5;
  }
}

for (var i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function (t) {
    resetOpacity();
    t.target.style.opacity = 1;
    selectOpt = t.target.getAttribute("opt");

    inimigoJogar();
  });
}
