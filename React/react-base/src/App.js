import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
