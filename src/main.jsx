import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ContentProvider } from './context/ContentContext'
import { WishlistProvider } from './context/WishlistContext'
import ErrorBoundary from './components/ErrorBoundary'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContentProvider>
        <WishlistProvider>
          <CartProvider>
            <ErrorBoundary>
              <Toaster position="top-right" />
              <App />
            </ErrorBoundary>
          </CartProvider>
        </WishlistProvider>
      </ContentProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
