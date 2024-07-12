import React from "react";
import { Outlet, Link, Navigate } from "react-router-dom";

// Mock authentication check function
const isAuthenticated = false; // Example: Change to your actual authentication check logic

const PrivateRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

const UserLayout = () => {
  return (
    <div className="p-4">
      <nav className="flex flex-col sm:flex-row gap-4 bg-gray-200 p-4 rounded-md shadow-md">
        <Link className="hover:text-blue-600" to="/profile">
          Profile
        </Link>
        <Link className="hover:text-blue-600" to="/profile/user-profile">
          UserProfile
        </Link>
        <Link className="hover:text-blue-600" to="/profile/user-about">
          UserAbout
        </Link>
        <Link className="hover:text-blue-600" to="/profile/user-info">
          UserInfo
        </Link>
        <Link className="hover:text-blue-600" to="/profile/user-account">
          UserAccount
        </Link>
      </nav>
      <div className="mt-4">
        <PrivateRoute>
          <Outlet />
        </PrivateRoute>
      </div>
    </div>
  );
};

export default UserLayout;
