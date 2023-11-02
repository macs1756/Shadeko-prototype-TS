/* eslint-disable @typescript-eslint/no-non-null-assertion */
import App from './App'
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index'
import './index.css'
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Provider store={store}>
     <React.StrictMode>
       <PersistGate loading={'loading'} persistor={ persistor }>
         <App />
       </PersistGate>
     </React.StrictMode>
  </Provider>
  </BrowserRouter>
)
