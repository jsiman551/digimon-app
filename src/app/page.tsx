"use client"
import EmptyState from "@/components/empty-state";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      {/*menu with logo and search input*/}
      <Navbar />
      {/*initial message that push user to start searching for digimons*/}
      <EmptyState
        description="Comienza a buscar tu digimon favorito para 
        comenzar a buscar informacion sobre el mismo."
      />
    </main >
  );
}
