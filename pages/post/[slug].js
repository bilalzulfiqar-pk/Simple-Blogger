import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace(".md", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fileContent = fs.readFileSync(path.join("posts", `${params.slug}.md`), "utf-8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { props: { data, contentHtml } };
}

export default function Post({ data, contentHtml }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Full-width Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">{data.title}</h1>
        <p className="mt-3 text-lg opacity-90">{data.date}</p>
      </header>

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto py-12 px-6 sm:border sm:mt-5">
        <article className="prose prose-lg md:prose-xl max-w-none text-gray-800">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </main>

      {/* Back to Home Button - Fixed and Modern */}
      <div className="flex justify-center py-10">
        <Link href="/">
          <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer">
            ← Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
