// NewsSection.jsx
import React from "react";

const articles = [
  {
    image: "/news-1.jpg",
    date: "20 AUG, 2020",
    title: "IT JOINS TWO PIECES OF METAL",
    author: "Admin",
    comments: "2 Comments",
    desc: "There are not many of passages of lorem ipsum available alteration in...",
  },
  {
    image: "/news-2.jpg",
    date: "20 AUG, 2020",
    title: "IT JOINS TWO PIECES OF METAL",
    author: "Admin",
    comments: "2 Comments",
    desc: "There are not many of passages of lorem ipsum available alteration in...",
  },
  {
    image: "/news-3.jpg",
    date: "20 AUG, 2020",
    title: "IT JOINS TWO PIECES OF METAL",
    author: "Admin",
    comments: "2 Comments",
    desc: "There are not many of passages of lorem ipsum available alteration in...",
  },
];

export const News = () => {
  return (
    <section
      style={{ backgroundImage: "url('/news-bg.jpg')" }}
      className=" text-white py-16 relative  mb-10 "
    >
      <div className="text-center mb-10">
        <p className="text-[#fcc729] font-bold border-2 border-[#fcc729] px-4 py-1 inline-block mb-2">
          From The Blog
        </p>
        <h2 className="text-[50px] font-[900]">NEWS & ARTICLES</h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white text-black rounded shadow overflow-hidden"
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-yellow-400 px-4 py-1 text-sm font-bold text-white">
                {article.date}
              </div>
            </div>
            <div className="p-5 space-y-2">
              <div className="flex text-sm text-[500] text-[#000;] gap-6">
                <p>👤 {article.author}</p>
                <p>💬 {article.comments}</p>
              </div>
              <h3 className="font-bold text-[21px]">{article.title}</h3>
              <p className="text-lg text-[#000">{article.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
