# My Blog

A modern, fast blog built with Next.js, TypeScript, and Tailwind CSS. This blog uses markdown files for content with gray-matter for frontmatter parsing.

## Features

- 📝 **Markdown Support** - Write posts in markdown with frontmatter
- 🖼️ **Custom Images** - Add an `image` field to your post frontmatter for custom hero/thumbnail images
- 🎨 **Modern Design** - Beautiful UI with shadcn/ui components
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive** - Works great on all devices
- ⚡ **Fast** - Built with Next.js for optimal performance
- 🔍 **SEO Friendly** - Server-side rendering for better SEO
- 🏷️ **Tag System** - Organize posts with tags
- 📅 **Date Sorting** - Posts automatically sorted by date
- 🤩 **Fun Sample Posts** - Includes several short, humorous blog posts to get you started

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Markdown**: gray-matter + remark
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd blog-thing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
blog-thing/
├── app/                    # Next.js App Router
│   ├── blog/[id]/         # Individual blog post pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── blog/             # Blog-specific components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Site navigation
│   ├── mode-toggle.tsx   # Theme toggle
│   └── providers.tsx     # Client providers
├── lib/                  # Utility functions
│   └── posts.ts          # Blog post utilities
├── posts/                # Markdown blog posts
└── public/               # Static assets
```

## Writing Blog Posts

### Creating a New Post

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter at the top of the file:

```markdown
---
title: 'Your Post Title'
date: '2024-01-01'
excerpt: 'A brief description of your post'
tags: ['tag1', 'tag2']
author: 'Your Name'
image: 'https://your-image-url.com/image.jpg' # Optional, for hero/thumbnail
---

# Your Post Content

Write your post content in markdown...
```

### Frontmatter Fields

- `title` (required): The title of your post
- `date` (required): Publication date (YYYY-MM-DD format)
- `excerpt` (optional): A brief description of the post
- `tags` (optional): Array of tags for categorization
- `author` (optional): Author name
- `image` (optional): URL for a custom hero/thumbnail image

### Markdown Features

The blog supports standard markdown syntax:

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[text](url)`
- **Code**: `` `inline code` ``
- **Code blocks**: ``` ``` ```
- **Lists**: `- item` or `1. item`
- **Blockquotes**: `> quote`

## Fun Sample Posts

This project includes several short, fun blog posts to get you started:
- **Coffee and Coding: The Perfect Pair**
- **Console.log Confessions: A Developer's Dirty Secret**
- **The Art of Git Commit Messages: A Comedy in 50 Characters**

Feel free to read, edit, or delete these posts as you like!

## Customizing Image Providers

If you want to use images from a provider like Imgur (or any other external image host), you need to update your Next.js config to allow that domain for image optimization.

### How to Add a New Image Provider (e.g., Imgur)

1. Open `next.config.ts` in your project root.
2. Add a new entry to the `images.remotePatterns` array for your provider. For Imgur, add:

```ts
images: {
  remotePatterns: [
    // ...other providers
    {
      protocol: 'https',
      hostname: 'i.imgur.com',
      port: '',
      pathname: '/**',
    },
  ],
},
```

3. Save the file and restart your dev server.

Now you can use Imgur image URLs in your post frontmatter, for example:

```markdown
image: 'https://i.imgur.com/your-image-id.jpg'
```

## Customization

### Styling

The blog uses Tailwind CSS for styling. You can customize:

- Colors in `app/globals.css`
- Component styles in the `components/` directory
- Prose styles for markdown content

### Components

All components are built with shadcn/ui and can be customized:

- `HeroPostCard`: Featured post at the top
- `AnimatedPostCard`: Animated post previews
- `StackedPostList`: Stacked list layout for posts
- `Navigation`: Site navigation

### Adding New Features

The modular structure makes it easy to add new features:

1. **New Pages**: Add files to the `app/` directory
2. **New Components**: Create components in the `components/` directory
3. **New Utilities**: Add utility functions to the `lib/` directory

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The blog can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
- [remark](https://remark.js.org/) - Markdown processing
- [Place Cage](https://placecage.lucidinternets.com/) - Fun placeholder images
