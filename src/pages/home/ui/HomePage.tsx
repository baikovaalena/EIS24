import { CountersTable } from '@widgets/counters-table';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <h1 className="home-page__title">Список счётчиков</h1>
        <CountersTable />
      </div>
    </main>
  );
};
