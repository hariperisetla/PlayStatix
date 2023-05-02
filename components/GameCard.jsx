import React from "react";
import Image from "next/image";
import Link from "next/link";

const GameCard = ({ game }) => {
  return (
    <Link
      href={`/game/${game.slug}`}
      className=" shadow bg-sky-950 flex flex-col items-center text-center"
    >
      <div className="relative w-full h-64 hover:bg-red-500 hover:">
        <div className="absolute bg-gradient-to-br justify-center flex flex-col text-center from-violet-950 to-sky-950 w-full h-full opacity-0 hover:opacity-90 ease-in-out z-10 text-xl">
          View
        </div>

        {typeof game.cover?.url === "undefined" ? (
          <Image
            src={`https://placehold.co/352x264.jpg`}
            fill
            alt="placeholder"
          />
        ) : (
          <Image
            src={`https:${game.cover.url.replace("t_thumb", "t_cover_big")}`}
            fill
            alt="placeholder"
            sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
            className="object-cover"
          />
        )}
      </div>
      <h3 className="text-md text-center p-2">{game.name}</h3>
    </Link>
  );
};

export default GameCard;
