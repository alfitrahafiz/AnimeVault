import { useState } from 'react';
import { ThemeProvider } from './Context/ThemeContext';
import Sidebar from './Components/UI/Sidebar';
import TopNavigation from './Components/UI/TopNavigation';
import TopAnime from './Components/Content/TopAnime';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  return (
    <Router>
      <ThemeProvider>
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={() => setIsSidebarOpen(false)} />
        <TopNavigation
          setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)}
          setViewMode={setViewMode}
          viewMode={viewMode}
        />
        <Routes>
          <Route path='/' element={<TopAnime viewMode={viewMode} />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
