import { Post } from "../components/post";
import { posts } from "../blogList";
import Home from "../components/home"

export default function IndexPage() {
  return (
    <>
      <Home />

      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}