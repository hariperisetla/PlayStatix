import Image from "next/image";
import React, { useEffect, useState } from "react";

export async function getServerSideProps({ query }) {
  const gamesData = await fetch(
    `https://api.igdb.com/v4/games/${query.id}/?fields=*,cover.*,external_games.*,genres.*,screenshots.*,videos.*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Client-ID": process.env.CLIENT_ID,
        "Content-Type": "application/json",
      },
    }
  );

  const games = await gamesData.json();

  const game = games[0];

  return { props: { game } };
}

const Game = ({ game }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date(game.created_at * 1000));
  }, []);

  return (
    <div>
      {console.log(game)}

      <div
        key={game.id}
        className="container pt-5 space-y-5 justify-center flex flex-col items-center"
      >
        <h1 className="text-3xl uppercase font-audiowide">{game.name}</h1>
        <div className={"relative w-1/5 h-[40vh]"}>
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
              className="object-center"
            />
          )}
        </div>

        <div className="flex flex-col justify-center text-center pt-5 space-y-3">
          <h3 className="text-3xl font-bold">Screenshots</h3>
          <div className="flex">
            {game.screenshots &&
              game.screenshots.map((screen) => (
                <div key={screen.id}>
                  <div className={`relative w-96 h-48`}>
                    {typeof screen?.image_id === "undefined" ? (
                      <Image
                        src={`https://placehold.co/352x264.jpg`}
                        fill
                        alt="placeholder"
                      />
                    ) : (
                      <Image
                        src={`https://images.igdb.com/igdb/image/upload/t_screenshot_huge/${screen.image_id}.jpg`}
                        fill
                        alt="placeholder"
                        sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                        className="object-contain"
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>Created At: {date.toString()}</div>
      </div>
    </div>
  );
};

export default Game;
