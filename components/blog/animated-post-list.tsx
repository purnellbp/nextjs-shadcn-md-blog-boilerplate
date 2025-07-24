"use client"

import { AnimatedPostCard } from './animated-post-card';
import { PostMeta } from '@/lib/posts';

interface AnimatedPostListProps {
  posts: PostMeta[];
}

export function AnimatedPostList({ posts }: AnimatedPostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-muted-foreground">No posts found</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Check back later for new content!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <AnimatedPostCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
} 