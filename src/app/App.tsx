import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '@pages/home';
import { StoreProvider } from './providers/StoreProvider';

const App = () => (
  <BrowserRouter>
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  </BrowserRouter>
);

export default App;
