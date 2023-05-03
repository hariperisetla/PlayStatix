import React from "react";
import Search from "./Search";
import Link from "next/link";

const Header = () => {
  const pages = ["home", "about", "contact", "sign in"];

  return (
    <header className="flex justify-between p-5 items-center">
      <Link className="text-3xl cursor-pointer font-audiowide" href={"/"}>
        PlayStatix
      </Link>
      <Search className="self-center" />
      <ul className="flex space-x-5 text-md font-audiowide">
        {pages.map((page, id) => (
          <li key={id} className="hover:underline capitalize cursor-pointer">
            {page}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
