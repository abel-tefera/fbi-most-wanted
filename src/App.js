import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WantedList from './components/WantedList';
import Header from './components/Header';
import WantedDetails from './components/WantedDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<WantedList />} />
            <Route path="wanted" element={<WantedDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
