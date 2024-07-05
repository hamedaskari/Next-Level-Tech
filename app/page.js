import Link from "next/link";

import ImageSlideshow from "@/components/images/image-slideshow";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Tech Blogs for NextLevel Tech Lovers</h1>
            <p>Read & share Blogs from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/posts">Explore Blogs</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Tech is a platform for tech bloggers to share their
            favorite articles with the world. It`s a place to discover new tech
            insights, and to connect with other tech enthusiasts.
          </p>
          <p>
            NextLevel Tech is a place to discover new tech insights, and to
            connect with other tech enthusiasts.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Tech?</h2>
          <p>
            NextLevel Tech is a platform for tech bloggers to share their
            favorite articles with the world. It`s a place to discover new tech
            insights, and to connect with other tech enthusiasts.
          </p>
          <p>
            NextLevel Tech is a place to discover new tech insights, and to
            connect with other tech enthusiasts.
          </p>
        </section>
      </main>
    </>
  );
}
