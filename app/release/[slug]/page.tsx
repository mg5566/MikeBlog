import { notFound } from "next/navigation";
import { baseUrl } from "app/sitemap";
import releases from "content/release";
import NotionRenderer from "components/notion-renderer";
import Comment from "components/comment";

// export const runtime = "edge";

export async function generateStaticParams() {
  return releases.map((release) => ({ slug: release.slug }));
}

export function generateMetadata({ params }) {
  let release = releases.find((release) => release.slug === params.slug);
  if (!release) {
    return;
  }
  let { title, date: publishedTime, description, image } = release;
  let ogImage = image
    ? image
    : `${baseUrl}/og_image.png?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/release/${release.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Release({ params }) {
  const { slug } = await params;
  let release = releases.find((release) => release.slug === slug);
  if (!release) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ReleasePosting",
            headline: release.title,
            datePublished: release.date,
            dateModified: release.date,
            description: release.description,
            image: release.image
              ? `${baseUrl}${release.image}`
              : `/og_image.png?title=${encodeURIComponent(release.title)}`,
            url: `${baseUrl}/release/${release.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <NotionRenderer post={release} />
      <Comment />
    </section>
  );
}
