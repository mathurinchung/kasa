import { Layout, Router } from './components';
import './assets/sass/App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
