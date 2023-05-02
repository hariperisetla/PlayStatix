import React from "react";

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

const Game = () => {
  return <div>Game</div>;
};

export default Game;
