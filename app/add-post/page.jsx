"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/add-post", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      router.refresh();
    } catch (e) {
      console.error(error);
    }
    setTitle("");
    setContent("");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href={"/"}>View Feed</Link>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
