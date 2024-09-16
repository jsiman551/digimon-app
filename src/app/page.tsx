import StoreProvider from './storeProvider';
import DigimonCard from '@/components/digimon-card/digimonCard';
import Navbar from '@/components/navbar';
import { api_base } from '@/consts';
import { RootState } from '@/lib/store';

async function fetchDigimons(): Promise<RootState['digimons']> {
  const res = await fetch(`${api_base}/api/digimon`, {
    next: { revalidate: 3600 }, // ISR por hora
  });
  const digimons = await res.json();
  return digimons;
}

export default async function Home() {
  const initialDigimons = await fetchDigimons();

  return (
    <StoreProvider initialState={{ digimons: initialDigimons }}>
      <main>
        <Navbar />
        <div className="text-center bg-base-100 mt-24">
          <p className="text-2xl">
            Busca tu digimon favorito.
          </p>
        </div>
        <div className="divider divider-primary p-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {initialDigimons.map((digimon: { name: string; img: string; level: string }, index: string) => (
            <DigimonCard
              key={index}
              name={digimon.name}
              img={digimon.img}
              level={digimon.level}
            />
          ))}
        </div>
      </main>
    </StoreProvider>
  );
}
