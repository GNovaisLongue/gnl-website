import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-4 pb-1 px-1 mt-8">
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
  );
}
