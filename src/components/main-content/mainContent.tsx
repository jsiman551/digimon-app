"use client"
import DigimonCard from '@/components/digimon-card/digimonCard';
import Navbar from '@/components/navbar';
import { DigimonType } from '@/types';
import { useAppSelector } from '@/lib/hooks';
import { underlineFirstWord } from '@/helpers';

const MainContent = () => {
    const initialDigimons = useAppSelector((state) => state.digimons.result);
    const notFoundDigimonError = useAppSelector((state) => state.digimons.error);

    return (
        <main className="py-10 max-w-screen-xl mx-auto">
            <Navbar />
            <div className="text-center dark:bg-base-100 mt-24">
                <p
                    className={`text-2xl ${notFoundDigimonError ? "text-red-900 dark:text-warning" : "dark:text-accent"}`}
                    dangerouslySetInnerHTML={{
                        __html: notFoundDigimonError
                            ? underlineFirstWord(notFoundDigimonError || "")
                            : "Lista de tus digimones favoritos",
                    }}
                />
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
