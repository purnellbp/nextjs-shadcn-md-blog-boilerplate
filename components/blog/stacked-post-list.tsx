"use client"

import { motion } from 'framer-motion';
import { HeroPostCard } from './hero-post-card';
import { AnimatedPostCard } from './animated-post-card';
import { PostMeta } from '@/lib/posts';
import { Separator } from '@/components/ui/separator';

interface StackedPostListProps {
  posts: PostMeta[];
}

export function StackedPostList({ posts }: StackedPostListProps) {
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

  const [heroPost, ...remainingPosts] = posts;

  return (
    <div className="space-y-8">
      {/* Hero Post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroPostCard post={heroPost} />
      </motion.div>

      {/* Remaining Posts */}
      {remainingPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-muted-foreground mb-2">More Posts</h2>
            <Separator />
          </div>
          
          <div className="space-y-4">
            {remainingPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <AnimatedPostCard post={post} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
} 