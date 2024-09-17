'use client'
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store';
import { setDigimons } from '@/lib/features/digimonSlice';
import { DigimonType } from '@/types';

export default function StoreProvider({
    children,
    initialState,
}: {
    children: React.ReactNode;
    initialState?: DigimonType[];
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
    }, [initialState]);

    return <Provider store={storeRef.current}>{children}</Provider>;
}
