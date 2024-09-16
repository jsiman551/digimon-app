import DigimonCard from "@/components/digimon-card/digimonCard";
import EmptyState from "@/components/empty-state";
import Navbar from "@/components/navbar";
import { api_base } from "@/consts";

export default async function Home() {

  //rederize page on server side
  const res = await fetch(`${api_base}/api/digimon`, {
    next: { revalidate: 3600 }, // ISR per hour.
  });
  const digimons = await res.json();

  return (
    <main>
      {/*menu with logo and search input*/}
      <Navbar />
      {/*initial message that push user to start searching for digimons*/}
      <EmptyState
        description="Comienza a buscar tu digimon favorito para 
        comenzar a buscar informacion sobre el mismo."
      />
      {/*card with information about searched digimon*/}
      <div className="divider divider-primary p-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {digimons.map((digimon: { name: string, img: string, level: string }, index: string) => {
          const {
            name,
            img,
            level
          } = digimon;
          return (
            <DigimonCard
              key={index}
              name={name}
              img={img}
              level={level}
            />
          )
        })}
      </div>
    </main >
  );
}
