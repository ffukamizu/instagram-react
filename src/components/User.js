import { useState } from "react";

export default function User() {
  let [userName, setName] = useState("catanacomics");
  let [userIcon, setIcon] = useState("./assets/catanacomics.svg");

  function changeUserName() {
    let newUserName = prompt("Insira seu nome nome de usuário:");

    if (newUserName) {
      setName(newUserName);
    }
  }

  function changeUserIcon() {
    let newUserIcon = prompt("Insira a url da sua foto de perfil:");

    if (newUserIcon) {
      setIcon(newUserIcon);
    }
  }

  return (
    <div class="usuario">
      <img onClick={changeUserIcon} src={userIcon} alt="nova foto de perfil" data-test="profile-image" />
      <div class="texto">
        <span>
          <strong data-test="name">{userName}</strong>
          <ion-icon onClick={changeUserName} name="pencil" data-test="edit-name"></ion-icon>
        </span>
      </div>
    </div>
  );
}
