import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
          <Header />
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
