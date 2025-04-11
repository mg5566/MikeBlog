import Link from "next/link";

// 게시물 타입 정의
export type Post = {
  slug: string;
  date: string;
  title: string;
  description?: string;
  image?: string;
};

type PageType = "blog" | "release";

// 순수 컴포넌트로 변경 - props로 posts 배열을 받음
export function PostList({ type, posts }: { type: PageType; posts: Post[] }) {
  return (
    <div>
      {posts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/${type}/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {post.date}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
