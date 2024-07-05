"use client";

import { useFormState } from "react-dom";

import ImagePicker from "@/components/posts/image-picker";
import classes from "./page.module.css";
import { sharePost } from "@/lib/actions";
import PostsFormSubmit from "@/components/posts/posts-form-submit";

export default function SharePostPage() {
  const [state, formAction] = useFormState(sharePost, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite post</span>
        </h1>
        <p>Or any other post you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="content">content</label>
            <textarea id="content" name="content" rows="10" required></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <PostsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
