import { getPosts } from "@/utils/utils";
import { home } from "@/resources";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "content", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  // Le rapport en vedette de l'accueil (home.featured) passe en premier, puis les autres du plus récent au plus ancien.
  const featuredSlug =
    home.featured?.display && home.featured.href ? home.featured.href.split("/").filter(Boolean).pop() : undefined;
  const sortedProjects = allProjects.sort((a, b) => {
    if (a.slug === featuredSlug) return -1;
    if (b.slug === featuredSlug) return 1;
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
