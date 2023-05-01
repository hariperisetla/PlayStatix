import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const gamesData = await fetch(
    "https://api.igdb.com/v4/games/?fields=*,cover.*,genres.*,rating&order=rating:asc&limit=24",
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Client-ID": process.env.CLIENT_ID,
        "Content-Type": "application/json",
      },
    }
  );

  const games = await gamesData.json();

  return { props: { games } };
}

export default function Home({ games }) {
  return (
    <main>
      <h1>PlayStatix</h1>

      <div className="container grid grid-cols-8 gap-3 mx-auto">
        {console.log(games)}
        {games.map((game) => (
          <div key={game.id} className="shadow">
            <div className="relative w-full h-64">
              {typeof game.cover?.url === "undefined" ? (
                <Image
                  src={`https://placehold.co/352x264.jpg`}
                  fill
                  alt="placeholder"
                />
              ) : (
                <Image
                  src={`https:${game.cover.url.replace(
                    "t_thumb",
                    "t_cover_big"
                  )}`}
                  fill
                  alt="placeholder"
                  className="object-cover"
                />
              )}
            </div>
            <h3 className="text-xl text-center">{game.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
