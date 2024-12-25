import { BlogGrid } from "@/components/blog/blog-grid";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Technical Blog</h1>
        <p className="text-muted-foreground">
          Sharing insights and experiences about backend development, system design,
          and software architecture.
        </p>
      </div>
      <BlogGrid />
    </div>
  );
}