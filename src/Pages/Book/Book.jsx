import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";
const Book = ({singleBook}) => {
    // const data = use(bookPromise)
     //console.log(singleBook)
    const {bookId,bookName,author , image,rating,category,tags,yearOfPublishing,publisher}=singleBook

    return (
    <Link to={`/bookDetails/${bookId}`}>
           <div className="card bg-base-100 w-96 shadow-sm  p-4 ">
  <figure className='p-4 bg-gray-100 w-11/12 mx-auto rounded-xl overflow-hidden'>
    <img className='h-[166px] '
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-10 text-green-500'>
        {
        tags.map((tag,i)=><button key={i}>{tag}</button> )
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p> By : {author}</p>
    <p>Published by :{publisher} </p>
    <div className='border-t-1 border-dashed'>

    </div>
    <div className="card-actions flex justify-between ">
      <div className="badge ">{category}</div>
      <div className="badge ">{rating}<FaRegStarHalfStroke /></div>
    </div>
  </div>
</div>
    </Link>
    );
};

export default Book;