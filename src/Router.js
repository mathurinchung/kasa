import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Accommodation, About, NotFound } from './pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/accommodation/:id" element={ <Accommodation /> } />
      <Route path="/about" element={ <About /> } />

      <Route path="/notfound" element={ <NotFound /> } />
      <Route path="*" element={ <Navigate to="/notfound" />} />
    </Routes>
  );
}

export default Router;
