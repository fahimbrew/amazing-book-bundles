import { useLoaderData, useParams } from "react-router-dom";
import {
  getStoredReadList,
  addToStoredReadList,
} from "../../Utilities/addToDb";
import { getWishList, addToWishList } from "../../Utilities/addToWishDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  //   console.log(book);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleReadList = (id) => {
    addToStoredReadList(id);
  };
  const handleWishList = (id) => {
    addToWishList(id);
  };

  return (
    <div className="hero  min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <figure className="bg-gray-100 md:w-1/2 md:h-[700px]  p-7 rounded-xl">
          <img
            src={image}
            className="w-full md:h-full object-cover rounded-lg shadow-2xl"
          />
        </figure>
        <div className="space-y-2 md:ml-6 md:w-1/2 mb-5">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="text-gray-500 font-semibold">By : {author}</p>
          <div className="divider"></div>
          <p className="text-gray-500 font-semibold">By : {category}</p>
          <div className="divider"></div>
          <p className="py-6">
            <span className="font-bold">Review : </span>
            <span className="text-gray-500">{review}</span>
          </p>
          <div className="flex gap-3 items-center">
            <span className="font-bold">Tags:</span>
            <p className="flex gap-3">
              {tags.map((tag, index) => (
                <span
                  className="border p-3 bg-lime-50 text-green-600 rounded-2xl"
                  key={index}
                >
                  #{tag}
                </span>
              ))}
            </p>
          </div>
          <div className="divider"></div>
          <div className="w-7/12 mt-6 space-y-2">
            <p className="flex justify-between">
              <span className="text-lg font-semibold">Number of pages:</span>
              <span className="text-gray-500">{totalPages}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-lg font-semibold">Publisher:</span>
              <span className="text-gray-500">{publisher}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-lg font-semibold">Year of publishng:</span>
              <span className="text-gray-500">{yearOfPublishing}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-lg font-semibold">Rating:</span>
              <span className="text-gray-500">{rating}</span>
            </p>
          </div>
          <div className="flex gap-4 my-4">
            <button
              onClick={() => handleReadList(bookId)}
              className="btn btn-outline"
            >
              Read
            </button>
            <button
              onClick={() => handleWishList(bookId)}
              className="btn bg-green-400 text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
