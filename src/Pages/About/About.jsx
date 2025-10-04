import React from "react";
import { Link } from "react-router";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Books"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-green-600">About Boi Poka 📚</h1>
          <p className="py-6 text-lg text-gray-600">
            Welcome to <span className="font-semibold text-green-500">Boi Poka</span> — your digital
            bookshelf! Here you can explore, save, and manage your favorite books with ease.  
            Whether you’re building your <span className="font-semibold">Read List</span> or 
            planning your <span className="font-semibold">Wish List</span>, we’ve got you covered.  
            Start your reading journey today and let knowledge be your superpower! 🚀
          </p>
           <Link to="/">
            <button className="btn btn-success text-white">Explore Books</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
