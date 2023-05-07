export default function User(props) {
  return (
    <div class="usuario">
      <img src="./assets/catanacomics.svg" alt="imagem de perfil" />
      <div class="texto">
        <span>
          <strong>{props.name}</strong>
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
