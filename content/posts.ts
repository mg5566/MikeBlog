import post1 from "../notion-data/126ce18c-fd83-8023-9ad1-d0e1809b21c3.json";
import post2 from "../notion-data/127ce18c-fd83-805c-bebd-d6772e18bf02.json";
import newPost from "../notion-data/19d8cf23-285a-80ba-98ce-c2a6c023394a.json";
import seoOpenGraph from "../notion-data/1b38cf23-285a-80f2-b2d2-ebea14678d05.json";

const posts = [
  {
    title: "Maximizing the Benefits of BFF Pattern in API Design",
    slug: "api-design-in-bff",
    content: post1,
    date: "2023-10-22",
    description:
      "Exploring the shift from domain-centric to data-centric API endpoints after introducing BFF. This article introduces BFF and DDD concepts, then proposes API endpoint design strategies in the context of the BFF pattern.",
    image: undefined,
  },
  {
    title: "Naver Search Bar UX: Analysis and Implementation Guide",
    slug: "naver-search-bar-ux",
    content: post2,
    date: "2023-10-23",
    description:
      "Explore the UX analysis of Naver's search bar and strategies for replicating its features. The post examines the UX triggers, selection of search results, and the refreshing of result lists. It also compares coding approaches for implementing search bar functionalities, aiming for a concise and effective execution.",
    image: undefined,
  },
  {
    title: "첫번째 블로그 포스팅",
    slug: "first-blog-post",
    content: newPost,
    date: "2025-03-10",
    description: "Go 를 시작하며",
    image: undefined,
  },
  {
    title: "SEO - Open Graph 적용하기",
    slug: "seo-open-graph",
    content: seoOpenGraph,
    date: "2025-03-12",
    description: "SEO - Open Graph 적용하기",
    image: undefined,
  },
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
};
