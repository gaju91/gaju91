import { blogPosts } from "@/lib/data/blog-posts";
import { BlogCard } from "./blog-card";

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  );
}