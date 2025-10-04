import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../Utility/addToDB";
import { addToWish } from "../../Utility/wishList";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = singleBook;
  //console.log(id,data)
  const handleRead= id =>{
        addToStoreDB(id)
  }
  const handleWish= id =>{
     addToWish(id)
  }
  return (
    <div className="card card-side bg-base-100 shadow-sm flex w-full p-10">
      {/* Image Section */}
      <figure className="w-1/2 flex items-center justify-center bg-gray-100">
        <img
          className="w-[425px] p-7 object-cover"
          src={image}
          alt={bookName}
        />
      </figure>

      {/* Content Section */}
      <div className="w-1/2 p-6 flex flex-col justify-between space-y-3">
        <h2 className="text-5xl font-bold">{bookName}</h2>
        <p className="mb-0">By: {author}</p>
        <div className="border-t border-dashed my-1"></div>

        <div className="badge text-2xl mt-4">{category}</div>

        <div className="border-t border-dashed my-2"></div>

        <div>
          <span className="font-bold">Review :</span> {review}
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Tag</p>
          {tags.map((tag) => (
            <button className="text-[#23BE0A]">#{tag}</button>
          ))}
        </div>
        <div className="border-t border-dashed my-1"></div>

        <div className="flex gap-15">
          <div className="flex flex-col gap-3 text-[#131313B3]">
            <p>Number of Pages :</p>
            <p>Publisher :</p>
            <p>Year of Publishing :</p>
            <p>Rating :</p>
          </div>
          <div className="flex flex-col gap-3 font-bold">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex gap-15">
          <button onClick={()=>handleRead(id)} className="btn ">Mark as Read</button>
          <button onClick={()=>handleWish(id)} className="btn btn-info">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
