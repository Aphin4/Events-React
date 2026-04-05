import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SCPLayout } from './components/SCPLayout';
import { Home } from './pages/Home';
import { Cinfo } from './pages/Cinfo';
import { Keycards } from './pages/Keycards';
import { Information } from './pages/Information';
import { History } from './pages/History';
import { CASSIE } from './pages/CASSIE';
import { TOCProvider } from './context/TOCContext';

const App: React.FC = () => {
  return (
    <Router>
      <TOCProvider>
        <SCPLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cinfo" element={<Cinfo />} />
            <Route path="/cassie" element={<CASSIE />} />
            <Route path="/keycards" element={<Keycards />} />
            <Route path="/information" element={<Information />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </SCPLayout>
      </TOCProvider>
    </Router>
  );
};

export default App;
