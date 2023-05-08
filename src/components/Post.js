import { useState } from "react";

export default function Post(props) {
  let [saveIcon, setSaveIcon] = useState("bookmark-outline");
  let [likedPost, setLike] = useState("heart-outline");
  let [heartColor, setHeartColor] = useState("heart-black");
  let [likeNumber, setNumber] = useState("101.523");
  
  
  function savePost() {
    if (saveIcon === 'bookmark-outline') {
      setSaveIcon("bookmark");
    } else if (saveIcon === 'bookmark') {
      setSaveIcon("bookmark-outline");
    }
  }
  
  function likePost() {
    if (likedPost === 'heart-outline') {
      setLike('heart');
      setHeartColor("heart-red");
      setNumber("101.524");
    } else if (likedPost === 'heart') {
      setLike('heart-outline');
      setHeartColor("heart-black");
      setNumber("101.523");
    }
  }

  function likePostImage() {
    setLike('heart');
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
        <img onClick={() => likePostImage()} src={props.image} alt={props.name} />
      </div>
      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon class={heartColor} onClick={() => likePost()} name={likedPost} data-test="like-post"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={() => savePost()} name={saveIcon} data-test="save-post"></ion-icon>
          </div>
        </div>
        <div class="curtidas">
          <img src="./assets/respondeai.svg" alt="respondeai" />
          <div class="texto" data-test="likes-number">
            Curtido por <strong>respondeai</strong> e <strong>outras {likeNumber} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
