import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag } from 'lucide-react';
import { PostMeta } from '@/lib/posts';

interface PostCardProps {
  post: PostMeta;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>{new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
          {post.author && (
            <>
              <span>•</span>
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </>
          )}
        </div>
        <CardTitle className="text-xl">
          <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        {post.excerpt && (
          <CardDescription className="text-base">
            {post.excerpt}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 