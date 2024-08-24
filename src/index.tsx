import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './App';

const rootEle = document.getElementById('root');
if (rootEle) {
  const root = ReactDOM.createRoot(rootEle);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}