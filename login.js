import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.cadastrar = async function () {
  const email = document.getElementById("cad-email").value;
  const senha = document.getElementById("cad-senha").value;

  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    alert("Conta criada com sucesso!");
    window.location.href = "index.html";
  } catch (error) {
    alert("Erro ao cadastrar: " + error.message);
  }
};

window.entrar = async function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    alert("Login realizado!");
    window.location.href = "index.html";
  } catch (error) {
    alert("Erro ao entrar: " + error.message);
  }
};

window.mostrarCadastro = () => {
  document.querySelector(".login-container").style.display = "none";
  document.querySelector(".cadastro-container").style.display = "block";
};

window.mostrarLogin = () => {
  document.querySelector(".cadastro-container").style.display = "none";
  document.querySelector(".login-container").style.display = "block";
};