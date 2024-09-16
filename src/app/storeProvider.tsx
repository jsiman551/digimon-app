// app/StoreProvider.tsx
'use client'
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore, RootState } from '../lib/store';

export default function StoreProvider({
    children,
    initialState,
}: {
    children: React.ReactNode;
    initialState?: RootState;
}) {
    const storeRef = useRef<AppStore>();

    if (!storeRef.current) {
        storeRef.current = makeStore();
        if (initialState) {
            storeRef.current.dispatch({ type: 'digimons/setDigimons', payload: initialState });
        }
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
