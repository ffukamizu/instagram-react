export default function Storie(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img  class="story-circle" src="./assets/story-circle.svg" alt="circle"/>
        <img class="story-icon" src={props.icon} alt={props.name} />
      </div>
      <div class="usuario">{props.name}</div>
    </div>
  );
}
