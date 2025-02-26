# Simple Blogger – Static Blogs with Next.js & Markdown

A minimal static blogging platform built with Next.js and Markdown. Effortless content creation with fast performance.

## Features

- 📝 Write posts using **Markdown (.md)** files
- ⚡ **Static Generation (SSG)** for fast performance
- 🎨 Styled with **Tailwind CSS** for a modern look
- 📂 Automatically generates pages from the `posts` folder
- 🔗 SEO-friendly URLs based on post slugs

## Live Demo

Check out the live demo here: [Live Demo](https://simple-blogger.vercel.app/)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/simple-blogger.git
   cd simple-blogger
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000) to see your blog.

## Project Structure
```
/simple-blogger
│── /posts            # Markdown blog posts
│── /pages            # Next.js pages
│   ├── index.js      # Home page (Lists blog posts)
│   ├── post          # Dynamic route for blog posts
│── /styles          # Global styles
│── /public          # Static assets
│── next.config.js    # Next.js configuration
│── package.json      # Dependencies and scripts
```

## How to Add a New Blog Post

1. Inside the `posts/` folder, create a new `.md` file:
   ```
   posts/my-first-post.md
   ```
2. Add metadata at the top of the file (Front Matter):
   ```md
   ---
   title: "My First Blog Post"
   date: "2025-02-26"
   description: "An introduction to my blogging journey."
   ---
   ```
3. Write your content below the metadata.
4. The post will automatically appear on the homepage.

## Deployment

Easily deploy on **Vercel**:
```bash
npx vercel
```
Or manually deploy on **Netlify**, **GitHub Pages**, etc.

