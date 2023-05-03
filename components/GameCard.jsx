import React from "react";
import Image from "next/image";
import Link from "next/link";

const GameCard = ({ game }) => {
  return (
    <div className="shadow bg-sky-950 flex flex-col items-center text-center justify-between">
      <div className="relative w-full h-64 hover:bg-red-500 hover:">
        <div className="cursor-pointer absolute bg-gradient-to-br justify-center flex flex-col text-center from-violet-950 to-sky-950 w-full h-full opacity-0 hover:opacity-90 ease-in-out z-10 text-xl">
          <button
            className="bg-orange-500 m-2 p-2 z-30"
            onClick={() => console.log("wishlist")}
          >
            Add to Wishlist
          </button>
          <button
            className="bg-green-500 m-2 p-2 z-30"
            onClick={() => console.log("played")}
          >
            Played
          </button>
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
            className="object-fill"
          />
        )}
      </div>
      <h3 className="text-md text-center p-2">{game.name}</h3>
      <Link
        href={`/game/${game.id}`}
        className="justify-end bg-violet-900 w-full py-3 z-30"
      >
        View Details
      </Link>
    </div>
  );
};

export default GameCard;
