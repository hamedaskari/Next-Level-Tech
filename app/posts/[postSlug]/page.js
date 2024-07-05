import Image from "next/image";
import { notFound } from "next/navigation";

import { getPost } from "@/lib/posts";
import classes from "./page.module.css";

export async function generateMetadata({ params }) {
  const post = getPost(params.postSlug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default function PostDetailsPage({ params }) {
  const post = getPost(params.postSlug);

  if (!post) {
    notFound();
  }

  post.content = post.content.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={post.image} alt={post.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{post.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${post.creator_email}`}>{post.creator}</a>
          </p>
          <p className={classes.summary}>{post.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        ></p>
      </main>
    </>
  );
}
