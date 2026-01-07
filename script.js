document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // impede recarregar a página

  const user = document.getElementById("user").value.trim();
  const password = document.getElementById("password").value;

  // validações
  if (user === "") {
    alert("Informe o usuário.");
    return;
  }

  if (password.length < 8) {
    alert("A senha deve ter no mínimo 8 caracteres.");
    return;
  }

  // se passar nas validações
  window.location.href = "portal.html";
});

function irParaDiscente() {
  window.location.href = "discente.html";
}


function irParaTecWeb() {
  window.location.href = "tecweb.html";
}

