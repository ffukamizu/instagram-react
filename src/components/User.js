import { useState } from "react";

export default function User() {
  let [userName, setName] = useState("catanacomics");

  function changeUserName() {
    let newUserName = prompt("Insira seu nome nome de usuário:");

    if (newUserName !== "") {
      setName(newUserName);
    }
  }

  return (
    <div class="usuario">
      <img src="./assets/catanacomics.svg" alt="imagem de perfil" />
      <div class="texto">
        <span>
          <strong>{userName}</strong>
          <ion-icon onClick={changeUserName} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
