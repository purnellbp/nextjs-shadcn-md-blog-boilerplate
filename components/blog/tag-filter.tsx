import { Badge } from '@/components/ui/badge';
import { Tag } from 'lucide-react';

interface TagFilterProps {
  tags: string[];
  selectedTag?: string;
  onTagSelect: (tag: string | undefined) => void;
}

export function TagFilter({ tags, selectedTag, onTagSelect }: TagFilterProps) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Badge
        variant={selectedTag === undefined ? "default" : "secondary"}
        className="cursor-pointer hover:bg-primary/80 transition-colors"
        onClick={() => onTagSelect(undefined)}
      >
        All Posts
      </Badge>
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant={selectedTag === tag ? "default" : "secondary"}
          className="cursor-pointer hover:bg-primary/80 transition-colors"
          onClick={() => onTagSelect(tag)}
        >
          <Tag className="h-3 w-3 mr-1" />
          {tag}
        </Badge>
      ))}
    </div>
  );
} 