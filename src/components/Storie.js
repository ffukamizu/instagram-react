export default function Storie(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.icon} alt={props.name} />
      </div>
      <div class="usuario">{props.name}</div>
    </div>
  );
}
