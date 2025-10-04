import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-600">
          📚 Explore Our Books
        </h1>
        <p className="mt-2 text-gray-600">
          Find your next favorite read from our carefully curated collection.
        </p>
        <div className="flex justify-center mt-3">
          <div className="w-20 border-b-4 border-green-500"></div>
        </div>
      </div>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
