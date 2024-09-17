"use client"
import DigimonCard from '@/components/digimon-card/digimonCard';
import Navbar from '@/components/navbar';
import { DigimonType } from '@/types';
import { useAppSelector } from '@/lib/hooks';

const MainContent = () => {
    const initialDigimons = useAppSelector((state) => state.digimons.result);
    return (
        <main>
            <Navbar />
            <div className="text-center bg-base-100 mt-24">
                <p className="text-2xl">
                    Busca tu digimon favorito
                </p>
            </div>
            <div className="divider divider-primary p-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {initialDigimons.map((digimon: DigimonType, index: number) => {
                    const { name, img, level } = digimon;
                    return <DigimonCard
                        key={index}
                        name={name}
                        img={img}
                        level={level}
                    />
                })}
            </div>
        </main>
    );
}

export default MainContent;
