import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { Provider } from 'react-redux'
import store from './utils/store.js'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>,
)
