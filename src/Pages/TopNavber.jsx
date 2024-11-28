


import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "Love", img:"/images/love.png",link:"/love" },
    { name: "Marriage", img: "/images/marriage.png",link:"/marriage" },
    { name: "Career", img: "/images/career.png",link:"/career" },
    { name: "Finance", img: "/images/finance.png",link:"/finance" },
    { name: "Health", img:"/images/health.png",link:"/health" },
    { name: "Education", img: "/images/education.png",link:"/education" },
    { name: "Child", img: "/images/child.png",link:"/child" },
  ];

  return (
    <nav className="bg-yellow-500 shadow-md py-4">
      <div className="flex justify-center items-center space-x-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-12 h-12 mb-2 rounded-xl" /* Adjusts image size */
            />
            <span className="text-sm font-medium">{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
