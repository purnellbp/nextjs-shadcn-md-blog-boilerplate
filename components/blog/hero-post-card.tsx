"use client"

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { PostMeta } from '@/lib/posts';

interface HeroPostCardProps {
  post: PostMeta;
}

export function HeroPostCard({ post }: HeroPostCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ 
          y: -2,
          transition: { duration: 0.2 }
        }}
      >
        <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="flex gap-6 p-6">
          {/* Hero Image */}
          <div className="flex-shrink-0">
            <Image 
              src={post.image || "https://placecage.lucidinternets.com/192/128"} 
              alt={`${post.title} hero image`}
              width={192}
              height={128}
              className="w-48 h-32 rounded-lg object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="mb-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
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
              
              <CardTitle className="text-3xl font-bold leading-tight mb-3 hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
              
              {post.excerpt && (
                <CardDescription className="text-lg leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              )}
            </div>
            
            <div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <motion.div
                      key={tag}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 0.3 + tagIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Badge variant="secondary" className="text-sm">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              )}
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-200"
              >
                <span>Read full article</span>
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </div>
          </div>
        </div>
              </Card>
      </motion.div>
    </Link>
  );
} 