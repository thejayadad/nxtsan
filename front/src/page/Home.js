import React, { useState, useRef, useEffect } from 'react';
import {Link, Routes, Route} from "react-router-dom"

import Sidebar from '../components/Sidebar';
import UserPage from '../components/UserPage';
import { client } from '../client';
import Post from './Post';
import {userQuery} from "../utils/data"

const Home = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [user, setUser] = useState();


  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  return (
    <div
    className='flex bg-black-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'
    >
      <div className="hidden md:flex h-screen flex-initial">
    <Sidebar />
    </div>
    <div className="flex md:hidden flex-row">
    <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
    <button fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)}><i class="fas fa-bars"></i></button>
    <Link to="/">
    Post Board
    </Link>
    <Link to={`user-profile/${user?._id}`}>
    <img src={user?.image} alt="user-pic" className="w-9 h-9 rounded-full " />

    </Link>
    </div>
    {toggleSidebar && (
        <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="absolute w-full flex justify-end items-center p-2">
            <button fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)}><i class="fas fa-times"></i></button>
          </div>
          <Sidebar closeToggle={setToggleSidebar} user={user && user} />
        </div>
        )}
    </div>

    </div>
  )
}

export default Home