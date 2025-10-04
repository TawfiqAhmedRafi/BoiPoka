import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../Book/Book";
import { getWishedBook } from "../../Utility/wishList";
const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort , setSort]=useState("");
  const [activeTab, setActiveTab] = useState(0);
  const data = useLoaderData();

  useEffect(() => {
    const storedWishBook = getWishedBook();
    const ConvertedWishedBook = storedWishBook.map((id) => parseInt(id));
    const myWishList = data.filter((book) =>
      ConvertedWishedBook.includes(book.bookId)
    );
    setWishList(myWishList);
  }, [data]);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBook = storedBookData.map((id) => parseInt(id));
    //console.log(ConvertedStoredBook)
    const myReadList = data.filter((book) =>
      ConvertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
  setSort(type);
  if (activeTab === 0) {
    // sort read list
    const sorted =
      type === "pages"
        ? [...readList].sort((a, b) => a.totalPages - b.totalPages)
        : [...readList].sort((a, b) => a.rating - b.rating);
    setReadList(sorted);
  } else {
    // sort wish list
    const sorted =
      type === "pages"
        ? [...wishList].sort((a, b) => a.totalPages - b.totalPages)
        : [...wishList].sort((a, b) => a.rating - b.rating);
    setWishList(sorted);
  }
};



  return (
    <div className="flex flex-col items-center my-10">
     <div className="dropdown dropdown-start mb-4">
  <div tabIndex={0} role="button" className="btn bg-green-500 text-white">
    Sort By: {sort ? sort : ""}
  </div>
  <ul
    tabIndex={0}
    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
  >
    <li>
      <a onClick={() => handleSort("pages")}>Pages</a>
    </li>
    <li>
      <a onClick={() => handleSort("ratings")}>Ratings</a>
    </li>
  </ul>
</div>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
  <TabList>
    <Tab selectedClassName="bg-green-500 text-white focus:outline-none ">Read Book List</Tab>
    <Tab selectedClassName="bg-green-500 text-white focus:outline-none">My Wish List</Tab>
  </TabList>

        <TabPanel>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {readList.map((b) => (
              <Book singleBook={b} key={b.bookId}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {wishList.map((b) => (
              <Book singleBook={b} key={b.bookId}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
