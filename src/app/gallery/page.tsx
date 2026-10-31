import { Flex, Meta, Schema } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, home, person } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  // Même ordre que la page Projets : le rapport en vedette d'abord, puis du plus récent au plus ancien.
  const dateBySlug = new Map(
    getPosts(["src", "content", "projects"]).map((post) => [
      post.slug,
      new Date(post.metadata.publishedAt).getTime(),
    ]),
  );
  const featuredSlug =
    home.featured?.display && home.featured.href ? home.featured.href.split("/").filter(Boolean).pop() : undefined;
  const slugOf = (src: string) => src.split("/projects/")[1]?.split("/")[0];
  const images = [...gallery.images].sort((a, b) => {
    const sa = slugOf(a.src);
    const sb = slugOf(b.src);
    if (sa === featuredSlug) return -1;
    if (sb === featuredSlug) return 1;
    return (dateBySlug.get(sb ?? "") ?? 0) - (dateBySlug.get(sa ?? "") ?? 0);
  });
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <GalleryView images={images} />
    </Flex>
  );
}
