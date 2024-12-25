import { BlogPost } from "@/lib/types/blog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col h-full p-6">
      <div className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{formatDate(post.publishDate)}</span>
          <span>•</span>
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readingTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-muted-foreground mb-4">{post.description}</p>
      </div>
      <Button variant="outline" size="sm" className="w-fit" asChild>
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          Read More <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </Button>
    </Card>
  );
}