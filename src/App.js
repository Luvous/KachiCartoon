import './App.css';
import Webpages from './routes/Router';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
        <Webpages />
    </MantineProvider>
  );
}

export default App;
