import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContent = fs.readFileSync(path.join("posts", fileName), "utf-8");
    const { data } = matter(fileContent);
    return { slug, ...data };
  });

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 py-10 text-center text-white">
        <h1 className="text-5xl font-extrabold">My Tech Blog</h1>
        <p className="mt-2 text-lg">Insights and articles on IT, coding, and more.</p>
      </header>

      <main className="container mx-auto py-10 px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/post/${post.slug}`}>
              <div className="cursor-pointer border rounded-lg shadow-md bg-white p-5 hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-gray-500 mt-2">{post.description}</p>
                <span className="mt-4 inline-block text-blue-500 font-semibold">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
