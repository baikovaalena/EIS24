import './HomePage.scss';
import { DeleteButton } from '@shared/ui/DeleteButton';

export const HomePage = () => {
  return (
    <main className="home-page">
      <h1 className="home-page__title">EIS24</h1>
      <DeleteButton />
    </main>
  );
};
