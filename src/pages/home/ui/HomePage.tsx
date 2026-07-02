import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { countersStore } from '@entities/counter';
import { CountersTable } from '@widgets/counters-table';
import './HomePage.scss';

export const HomePage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = Number(searchParams.get('page') ?? '1');
    const offset = (Math.max(1, page) - 1) * countersStore.limit;
    countersStore.loadPage(offset);
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
