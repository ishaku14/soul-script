import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx';
import { ThemePage } from './pages/ThemePage.jsx';
import { VersePage } from './pages/VersePage.jsx';
import { ReflectionPage } from './pages/ReflectionPage.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';

function App() {
  
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="theme" element={<ThemePage />} />
        <Route path="verse" element={<VersePage />} />
        <Route path="reflection" element={<ReflectionPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
