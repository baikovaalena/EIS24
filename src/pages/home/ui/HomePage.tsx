import { useEffect } from 'react';
import { countersStore } from '@entities/counter';
import { CountersTable } from '@widgets/counters-table';
import './HomePage.scss';

export const HomePage = () => {
  useEffect(() => {
    if (!countersStore.items.length && !countersStore.isLoading) {
      void countersStore.loadPage(0);
    }
  }, []);

  return (
    <main className="home-page">
      <div className="home-page__container">
        <h1 className="home-page__title">Список счётчиков</h1>
        <CountersTable />
      </div>
    </main>
  );
};
