import Router from './Router';
import { Header, Footer } from './Layouts';
import './css/App.css';

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
