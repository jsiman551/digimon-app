import MainContent from '@/components/main-content';
import StoreProvider from './storeProvider';
import { fetchDigimons } from '@/api/digimons';
import { DigimonType } from '@/types';

export default async function Home({ searchParams }: { searchParams: { name?: string; level?: string } }) {
  const filter = {
    name: searchParams.name,
    level: searchParams.level,
  };

  let initialDigimons: DigimonType[] | undefined = [];
  let errorMessage = null;

  try {
    // Fetch data
    initialDigimons = await fetchDigimons(filter);
  } catch (error: any) {
    errorMessage = error.message || 'Failed to fetch digimons';
  }

  return (
    <StoreProvider initialState={initialDigimons} errorMessage={errorMessage}>
      <MainContent />
    </StoreProvider>
  );
}
