import { Routes, Route } from 'react-router-dom';
import { Home, Accommodation, About, NotFound } from './pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/accommodation/:id" element={ <Accommodation /> } />
      <Route path="/about" element={ <About /> } />

      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default Router;
