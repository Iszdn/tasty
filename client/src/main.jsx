import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WishlistProvider from './context/WishlistContext.jsx'
import BasketProvider from './context/BasketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
    <BasketProvider>
       <App />
    </BasketProvider>
    </WishlistProvider>
   
  </React.StrictMode>,
)
