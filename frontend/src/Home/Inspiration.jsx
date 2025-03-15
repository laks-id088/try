import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Inspiration() {
  const { blogs } = useAuth();
  const inspirationBlogs = blogs?.filter((blog) =>
    blog.category.toLowerCase().includes("inspiration")
  );

  console.log("Inspiration Blogs:", inspirationBlogs);

  return (
    <div>
      <div className="container mx-auto my-12 p-4">
        <h1 className="text-2xl font-bold mb-6">Inspirational Stories</h1>
        <p className="text-center mb-8">
          Find motivation, success stories, and words of wisdom to uplift your journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {inspirationBlogs && inspirationBlogs.length > 0 ? (
            inspirationBlogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-semibold">{blog?.title}</h2>
                  <p className="text-sm">{blog?.category}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-10 text-gray-600">
              No Inspirational blogs found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
