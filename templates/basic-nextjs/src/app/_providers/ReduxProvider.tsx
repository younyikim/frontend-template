'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, store } from '@/app/_lib/store';

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    console.log('No Redux store found. Re-rendering the Store component.');
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
