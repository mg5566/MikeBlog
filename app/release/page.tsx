import { PostList } from "components/PostList";
import releases from "content/release";

export const metadata = {
  title: "Release",
  description: "Read my blog release.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Blog Release
      </h1>
      <PostList type="release" posts={releases} />
    </section>
  );
}
