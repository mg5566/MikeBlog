import v1_0_0 from "notion-data/1d28cf23-285a-803c-9296-fc9bd8c50c08.json";

const releases = [
  {
    title: "v1.0.0 출시",
    slug: "v1-0-0-release",
    date: "2025-04-07",
    content: v1_0_0,
    description: "블로그 버저닝 시작",
    image: undefined,
  },
] as Post[];

export default releases;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
};
