import Image from "next/image";
import AnimeList from "@/components/AnimeList";

export default async function Home() {
  const endpoint = process.env.NEXT_PUBLIC_ENDPOINT_JIKAN
  const response = await fetch(`${endpoint}/top/anime?limit=10`);
  const TopAnime = await response.json();

  return (
      <div>
        <AnimeList TopAnime={TopAnime}/>
      </div>
  );
}
