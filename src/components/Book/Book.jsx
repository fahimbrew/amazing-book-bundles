import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  //   console.log(book);
  const { image, bookId, bookName, author, category, rating, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 border p-6">
        <figure className="bg-[#F3F3F3] py-8 h-80 rounded-lg ">
          <img className="w-[166px]" src={image} alt={`ID Number: ${bookId}`} />
        </figure>
        <div className="card-body">
          <div className="space-x-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 p-2 rounded-2xl text-green-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="border border-dotted my-4 border-gray-700"></div>
          <div className="flex justify-between">
            <h3 className="text-gray-500">{category}</h3>
            <div>
              <p className="text-gray-500">{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
