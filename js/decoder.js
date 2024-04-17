function decodificador(frase) {
  // Define as substituições desejadas
  const substituicoes = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
    // Adicione mais substituições conforme necessário
  };

  // Converte a frase para minúsculas para fazer a substituição de forma case-insensitive
  frase = frase.toLowerCase();

  // Aplica as substituições
  let novaFrase = "";
  for (let i = 0; i < frase.length; i++) {
    const caractere = frase[i];
    // Verifica se o caractere atual precisa ser substituído
    if (substituicoes.hasOwnProperty(caractere)) {
      novaFrase += substituicoes[caractere];
    } else {
      // Se não precisar de substituição, mantém o caractere original
      novaFrase += caractere;
    }
  }

  return novaFrase;
}

function btnCriptografar() {
  const textarea = document.getElementById("txt-decode");
  const fraseOriginal = textarea.value;
  const fraseDecodificada = decodificador(fraseOriginal);
  document.getElementById("txt-user").innerText = fraseDecodificada;
  document.getElementById("txt").style.display = "none";
  document.getElementById("txt-user").style.display = "flex";
}

////// DESCRIPTOGRAFAR
function dedecodificador(frase) {
  const substituicoes = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  let novaFrase = frase.toLowerCase(); // Transformar toda a frase em minúsculas para garantir a correspondência correta

  // Aplicar as substituições
  for (const substituicao in substituicoes) {
      novaFrase = novaFrase.split(substituicao).join(substituicoes[substituicao]);
  }

  return novaFrase;
}

function btnDescriptografar() {
  const textarea = document.getElementById("txt-decode");
  const fraseOriginal = textarea.value;
  const fraseDecodificada = dedecodificador(fraseOriginal);
  document.getElementById("txt-user").innerText = fraseDecodificada;
  document.getElementById("txt").style.display = "none";
  document.getElementById("txt-user").style.display = "flex";
}
