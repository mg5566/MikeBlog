import { PostList } from "components/PostList";
import posts from "content/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <PostList type="blog" posts={posts} />
    </section>
  );
}
