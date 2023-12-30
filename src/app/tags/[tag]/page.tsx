import { getLocalData } from "../../lib/getLocalData";
import Navbar from "../../components/navbar";
import Link from "next/link";
import Post from "../../components/post";

export async function generateStaticParams() {
  const posts = getLocalData("posts");
  return posts.map((post) => ({
    tag: decodeURI(post.tags),
  }));
}

export default function Tag({ params }: any) {
  const { tag } = params;
  const filteredPosts = getLocalData("posts").filter((post) =>
    post.tags.includes(tag)
  );

  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col mt-36">
        <div className="flex gap-3 items-center">
          <Link href="/blog">&larr; </Link>
          <h1 className="text-2xl font-bold text-black">
            Posts tagged
            <span className="text-sm font-bold uppercase bg-primary text-white p-1 mx-1 rounded">
              {tag}
            </span>
          </h1>
        </div>

        <section className="py-10">
          {filteredPosts.map((post) => (
            <Post key={post.title} data={post}></Post>
          ))}
        </section>
      </main>
    </>
  );
}