import { Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
