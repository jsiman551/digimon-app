"use client"
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store';
import { setDigimons, setError } from '@/lib/features/digimonSlice';
import { DigimonType } from '@/types';

export default function StoreProvider({
    children,
    initialState,
    errorMessage,
}: {
    children: React.ReactNode;
    initialState?: DigimonType[];
    errorMessage?: string;
}) {
    const storeRef = useRef<AppStore>();

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    // Despachar los datos al store solo en el cliente
    useEffect(() => {
        if (initialState && storeRef.current) {
            storeRef.current.dispatch(setDigimons(initialState));
        }
        if (errorMessage && storeRef.current) {
            storeRef.current.dispatch(setError(errorMessage));
        }
    }, [initialState, errorMessage]);

    return <Provider store={storeRef.current}>{children}</Provider>;
}
