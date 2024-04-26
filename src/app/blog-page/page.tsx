"use client";

import { useState } from "react";
import Head from "next/head";

export default function Page() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
        <div>
          <a href="/" className="text-xl font-bold">
            My Blog
          </a>
        </div>
        <div className="relative">
          <button
            onClick={toggleCollapse}
            className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
          >
            Categories
          </button>
          <div
            className={`absolute top-full left-0 bg-white border border-gray-300 p-4 ${
              isCollapsed ? "hidden" : ""
            }`}
          >
            <button className="block px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 mb-2">
              Category 1
            </button>
            <button className="block px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
              Category 2
            </button>
          </div>
        </div>
        <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600">
          Log In
        </button>
      </header>

      <main className="max-w-4xl mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lacus
          vel nibh auctor mollis sed eu sem. Vestibulum gravida justo nec lectus
          sodales tempor.
        </p>
        <img
          src="/placeholder-image.jpg"
          alt="Placeholder"
          className="mb-4 rounded-lg"
        />
        <p className="mb-4">
          Fusce fringilla est eu tellus volutpat lacinia. Suspendisse potenti.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
        <img
          src="/placeholder-image.jpg"
          alt="Placeholder"
          className="mb-4 rounded-lg"
        />
        <p className="mb-4">
          Pellentesque sodales, arcu a consectetur commodo, urna magna viverra
          libero, in dictum libero erat nec lorem. Phasellus vestibulum, mi
          vitae ultrices vestibulum, felis sapien rutrum sem, non luctus quam
          libero id ex.
        </p>
      </main>

      <footer className="bg-gray-800 text-white py-4 px-8 mt-8">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 My Blog</p>
          <div>
            <a href="#" className="mr-4">
              Privacy Policy
            </a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
