import Storie from "./Storie";

const stories = [
  { name: "9gag", icon: "./assets/9gag.svg" },
  { name: "meowed", icon: "./assets/meowed.svg" },
  { name: "barked", icon: "./assets/barked.svg" },
  { name: "nathanwpyles", icon: "./assets/nathanwpylestrangeplanet.svg" },
  { name: "wawawicomics", icon: "./assets/wawawicomics.svg" },
  { name: "respondeai", icon: "./assets/respondeai.svg" },
  { name: "filomoderna", icon: "./assets/filomoderna.svg" },
  { name: "memeriago", icon: "./assets/memeriagourmet.svg" },
];

export default function Stories() {
  return (
    <div class="stories">
      {stories.map((storie) => (
        <Storie icon={storie.icon} name={storie.name} />
      ))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
