import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  tags?: string[];
  author?: string;
  image?: string;
}

export interface PostMeta {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  author?: string;
  image?: string;
}

export function getSortedPostsData(): PostMeta[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...(matterResult.data as { title: string; date: string; excerpt?: string; tags?: string[]; author?: string; image?: string }),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    content: contentHtml,
    ...(matterResult.data as { title: string; date: string; excerpt?: string; tags?: string[]; author?: string; image?: string }),
  };
}

export function getPostsByTag(tag: string): PostMeta[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter((post) => post.tags?.includes(tag));
}

export function getAllTags(): string[] {
  const allPosts = getSortedPostsData();
  const tags = new Set<string>();
  
  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  
  return Array.from(tags).sort();
} 