import MainContent from '@/components/main-content';
import StoreProvider from './storeProvider';
import { fetchDigimons } from '@/api/digimons';

export default async function Home({ searchParams }: { searchParams: { name?: string; level?: string } }) {
  //get filters
  const filter = {
    name: searchParams.name,
    level: searchParams.level,
  };
  //fetch data
  const initialDigimons = await fetchDigimons(filter);

  return (
    <StoreProvider initialState={initialDigimons}>
      <MainContent />
    </StoreProvider >
  );
}
