import React, { useState } from "react";

const Blog = () => {
  const [Title, setTitle] = useState("");
  const [dDesc, setdDesc] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleTitleFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setTitle(event.target.value);
  }

  function handledDescFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setdDesc(event.target.value);
  }
  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    setImg(event.target.value);
  }

  async function handle(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);
    localStorage.setItem("blog", JSON.stringify({ Title, dDesc, img }));
    setImg("");
    setTitle("");
    setdDesc("");
  }

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="lg:w-2/5 md:w-3/5 w-4/5">
        <label className="mt-6">Title</label>
        <input
          type="Title"
          className="mt-1 w-full rounded-xl border-gray-300 bg-slate-200 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          placeholder=""
          value={Title}
          onChange={(e) => handleTitleFieldChange(e)}
        />
        <label className="mt-6">Description</label>
        <input
          type="dDesc"
          className="mt-1 w-full rounded-xl border-gray-300 bg-slate-200 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          placeholder=""
          value={dDesc}
          onChange={(e) => handledDescFieldChange(e)}
        />
        <label className="mt-6">Image</label>
        <input
          className="mt-1 w-full rounded-xl px-4 border-gray-300 bg-slate-200 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          type="file"
          value={img}
          onChange={(e) => handleImage(e)}
        />
        <button
          className={`
              bg-white mt-6 border rounded-xl border-gray-300 p-2 hover:bg-purple-500 hover:text-white
              ${loading ? "bg-purple-500 text-white animate-pulse" : ""}
            `}
          disabled={loading}
          onClick={handle}
        >
          Save
        </button>
        <p className="text-red-900">{errorMessage}</p>
      </div>
    </div>
  );
};

export default Blog;
