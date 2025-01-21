import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  console.log(book);
  return (
    <div>
      <h2>Book Details {bookId}</h2>
    </div>
  );
};

export default BookDetail;
