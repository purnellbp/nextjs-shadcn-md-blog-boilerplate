import { getSortedPostsData } from '@/lib/posts';
import { StackedPostList } from '@/components/blog/stacked-post-list';
import { MotionWrapper } from '@/components/motion-wrapper';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <MotionWrapper>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <StackedPostList posts={posts} />
        </div>
      </div>
    </MotionWrapper>
  );
}
