import { useState } from "react";

export default function Post(props) {
  let [saveIcon, setSaveIcon] = useState("bookmark-outline");
  
  
  function savePost() {
    if (saveIcon === 'bookmark-outline') {
      setSaveIcon("bookmark");
    } else if (saveIcon === 'bookmark') {
      setSaveIcon("bookmark-outline");
    }
  }

  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.icon} alt={props.name} />
          {props.name}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div class="conteudo" data-test="post-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={() => savePost()} name={saveIcon} data-test="save-post"></ion-icon>
          </div>
        </div>
        <div class="curtidas">
          <img src="./assets/respondeai.svg" alt="respondeai" />
          <div class="texto">
            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
