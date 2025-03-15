import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../dashboard/Sidebar";
import MyProfile from "../dashboard/MyProfile";
import MyBlogs from "../dashboard/MyBlogs";
import CreateBlog from "../dashboard/CreateBlog";
import UpdateBlog from "../dashboard/UpdateBlog";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { profile, isAuthenticated } = useAuth();
  const [component, setComponent] = useState("My Blogs");

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="dashboard-container flex h-screen">
      {/* Sidebar (Left Side) */}
      <div className="sidebar w-64 bg-gray-100 p-6">
        <Sidebar component={component} setComponent={setComponent} />
      </div>

      {/* Content (Moves to Right on Desktop) */}
      <div className="content-wrapper flex-grow p-6 lg:ml-0">
        {component === "My Profile" ? (
          <MyProfile />
        ) : component === "Create Blog" ? (
          <CreateBlog />
        ) : component === "Update Blog" ? (
          <UpdateBlog />
        ) : (
          <MyBlogs />
        )}
      </div>
    </div>
  );
}

export default Dashboard;

