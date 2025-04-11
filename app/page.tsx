import Image from "next/image";
import { PostList } from "components/PostList";
import posts from "content/posts";
import releases from "content/release";

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image
          src="/og_image.png"
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full mr-4"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          The Not-So-Ordinary Developer
        </h1>
      </div>
      <p className="mb-4">
        Started as a not-so-great developer, became an okay one, and now pushing
        to be anything but ordinary.
      </p>
      <div className="my-8">
        <PostList type="blog" posts={posts} />
      </div>
      <div className="my-8">
        <PostList type="release" posts={releases} />
      </div>
    </section>
  );
}
