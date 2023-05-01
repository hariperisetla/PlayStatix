import React from "react";

export async function getServerSideProps() {
  const gamesData = await fetch(
    "https://api.igdb.com/v4/games/?fields=name&search=&limit=5",
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Client-ID": process.env.CLIENT_ID,
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
    }
  );

  const games = await gamesData.json();

  return { props: { games } };
}

const Search = () => {
  return <div>Search</div>;
};

export default Search;
