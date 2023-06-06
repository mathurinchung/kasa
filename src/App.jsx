import { Layout, Router } from './components';
import './sass/App.scss';

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
