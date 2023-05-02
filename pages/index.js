import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "@/components/Search";
import GameCard from "@/components/GameCard";

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
    <div className="grid grid-cols-7 gap-3">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
