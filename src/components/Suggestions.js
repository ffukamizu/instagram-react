import Suggestion from "./Suggestion";

const suggestions = [
  { name: "badvibememes", icon: "./assets/bad.vibes.memes.svg" },
  { name: "chibirdart", icon: "./assets/chibirdart.svg" },
  { name: "razoesparaacreditar", icon: "./assets/razoesparaacreditar.svg" },
  { name: "adorable_animals", icon: "./assets/adorable_animals.svg" },
  { name: "smallcutecats", icon: "./assets/smallcutecats.svg" },
];

export default function Suggestions() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestions.map((suggestion) => (
        <Suggestion name={suggestion.name} icon={suggestion.icon} />
      ))}
    </div>
  );
}
