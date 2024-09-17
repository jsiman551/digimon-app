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
  let errorMessage: string | undefined = undefined;;

  try {
    // Fetch data
    initialDigimons = await fetchDigimons(filter);
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorMessage = error.message || 'Failed to fetch digimons';
    }
  }

  return (
    <StoreProvider initialState={initialDigimons} errorMessage={errorMessage}>
      <MainContent />
    </StoreProvider>
  );
}
