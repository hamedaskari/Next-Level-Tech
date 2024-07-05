import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("posts.db");

export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return db.prepare("SELECT * FROM posts").all();
}

export function getPost(slug) {
  return db.prepare("SELECT * FROM posts WHERE slug = ?").get(slug);
}

export async function savePost(post) {
  post.slug = slugify(post.title, { lower: true });
  post.content = xss(post.content);

  const extension = post.image.name.split(".").pop();
  const fileName = `${post.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await post.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  post.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO posts
      (title, summary, content, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @content,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(post);
}
