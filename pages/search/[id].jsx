import GameCard from "@/components/GameCard";
import React from "react";

export const getServerSideProps = async ({ query }) => {
  const gamesData = await fetch(
    `https://api.igdb.com/v4/games/?fields=*,cover.*,genres.*&search=${query.id}&limit=24`,
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
};

const GameSearch = ({ games }) => {
  return (
    <div className="grid grid-cols-7 gap-5">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameSearch;
