import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import PostGrid from "@/components/posts/posts-grid";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "All Tech Posts",
  description: "Browse the tech posts shared by our vibrant community.",
};

async function Posts() {
  const posts = await getPosts();

  return <PostGrid posts={posts} />;
}

export default function PostsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Significant Tech Blogs, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite tech post. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/posts/share">Share Your Favorite blog post</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Posts...</p>}
        >
          <Posts />
        </Suspense>
      </main>
    </>
  );
}
