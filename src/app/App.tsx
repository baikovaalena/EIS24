import { HomePage } from '@pages/home';
import { StoreProvider } from './providers/StoreProvider';

const App = () => (
  <StoreProvider>
    <HomePage />
  </StoreProvider>
);

export default App;
