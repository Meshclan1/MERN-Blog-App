import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    e.preventDefault();

    const res = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
    });
    console.log(await res.json);
  }

  return (
    <form onSubmit={createNewPost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      ></input>
      <input type="file" onChange={(e) => setFiles(e.target.files)}></input>
      <ReactQuill
        value={content}
        onChange={(newValue) => setContent(newValue)}
        module={modules}
        formats={formats}
      />
      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
}
