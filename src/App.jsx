import { Router } from './components/Router';
import { Header, Footer } from './components/Layouts';
import './css/App.css';
import './css/Icons.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main id="Main">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
