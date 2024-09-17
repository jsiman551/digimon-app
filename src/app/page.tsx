import MainContent from '@/components/main-content';
import StoreProvider from './storeProvider';
import { api_base } from '@/consts';
import { DigimonType } from '@/types';

async function fetchDigimons(): Promise<DigimonType[]> {
  const res = await fetch(`${api_base}/api/digimon`, {
    next: { revalidate: 3600 }, // ISR por hora
  });
  const digimons = await res.json();
  return digimons;
}

export default async function Home() {
  const initialDigimons = await fetchDigimons();

  return (
    <StoreProvider initialState={initialDigimons}>
      <MainContent />
    </StoreProvider >
  );
}
