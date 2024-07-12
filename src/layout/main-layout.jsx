import React from "react";
import { Link, Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <>
      <header className="header flex justify-between items-center p-4 bg-slate-500 text-white">
        <nav className="flex gap-4">
          <Link className="hover:text-gray-300" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-300" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-300" to="/profile">
            Profile
          </Link>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="bg-slate-500 text-white text-center p-4">
        &copy; 2024 Your Website. All Rights Reserved.
      </footer>
    </>
  );
};

export default MainLayout;
