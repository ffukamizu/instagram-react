import Post from "./Post";

const posts = [
  { name: "meowed", icon: "./assets/meowed.svg", image: "./assets/gato-telefone.svg", id: 1 },
  { name: "barked", icon: "./assets/barked.svg", image: "./assets/dog.svg", id: 2 },
  { name: "animecat", icon: "./assets/cat.png", image: "./assets/toyko.jpeg", id: 3 },
];

export default function Posts() {
  return (
    <div class="posts">
      {posts.map((post) => (
        <Post name={post.name} icon={post.icon} image={post.image} />
      ))}
    </div>
  );
}
