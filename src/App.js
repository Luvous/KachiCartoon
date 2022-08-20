import './App.css';
import Webpages from './routes/Router';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <Webpages />
      </div>
    </MantineProvider>
  );
}

export default App;
