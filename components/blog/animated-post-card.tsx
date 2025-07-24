"use client"

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag } from 'lucide-react';
import { PostMeta } from '@/lib/posts';

interface AnimatedPostCardProps {
  post: PostMeta;
  index: number;
}

export function AnimatedPostCard({ post, index }: AnimatedPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -2,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <div className="flex gap-4 p-4">
          {/* Post Image */}
          <div className="flex-shrink-0">
            <Image 
              src={post.image || "https://placecage.lucidinternets.com/80/64"} 
              alt={`${post.title} thumbnail`}
              width={80}
              height={64}
              className="w-20 h-16 rounded-md object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
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
            
            <CardTitle className="text-xl mb-2">
              <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </CardTitle>
            
            {post.excerpt && (
              <CardDescription className="text-base line-clamp-2 mb-3">
                {post.excerpt}
              </CardDescription>
            )}
            
            {post.tags && post.tags.length > 0 && (
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {post.tags.map((tag, tagIndex) => (
                  <motion.div
                    key={tag}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.4 + index * 0.1 + tagIndex * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Badge variant="secondary" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
} 