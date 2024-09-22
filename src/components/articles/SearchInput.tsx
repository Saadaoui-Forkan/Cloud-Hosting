"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [searchArticle, setSearchArticle] = useState("");
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchArticle);
    router.push(`/articles/search?article=${searchArticle}`);
  };
  return (
    <form className="flex justify-center m-5" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Search articles..."
        className="px-4 py-2 border rounded-lg w-full md:w-1/2"
        value={searchArticle}
        onChange={(e) => setSearchArticle(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
