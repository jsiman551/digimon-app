import { api_base } from "@/consts";
import { DigimonType } from "@/types";

export const fetchDigimons = async (filter?: { name?: string; level?: string }): Promise<DigimonType[]> => {
    let url = `${api_base}/api/digimon`;

    //change url depending on filter selection
    if (filter?.name) {
        // by name
        url = `${api_base}/api/digimon/name/${filter.name}`;
    } else if (filter?.level) {
        // by level
        url = `${api_base}/api/digimon/level/${filter.level}`;
    }


    const digimons = await fetch(url, {
        next: { revalidate: 3600 }, // ISR por hora
    });

    if (!digimons.ok) {
        throw new Error('Failed to fetch digimons');
    }

    return digimons.json();
}
