import { api_base } from "@/consts";
import { DigimonType } from "@/types";

export const fetchDigimons = async (filter?: { name?: string; level?: string }): Promise<DigimonType[]> => {
    let url = `${api_base}/api/digimon`;

    // Change URL depending on filter selection
    if (filter?.name) {
        // By name
        url = `${api_base}/api/digimon/name/${filter.name}`;
    } else if (filter?.level) {
        // By level
        url = `${api_base}/api/digimon/level/${filter.level}`;
    }

    const response = await fetch(url, {
        next: { revalidate: 3600 }, // ISR por hora
    });

    if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.ErrorMsg || 'Failed to fetch digimons';
        throw new Error(errorMessage);
    }

    return response.json();
}
