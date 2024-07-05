"use client";

import { useFormStatus } from "react-dom";

export default function PostsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Post"}
    </button>
  );
}
