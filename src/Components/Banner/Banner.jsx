import React from "react";
import bookimg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen p-16 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookimg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
         
          <button className="btn btn-primary mt-7">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
