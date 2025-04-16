import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BookmarkProvider } from './store/BookmarkProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BookmarkProvider>
     <App />
  </BookmarkProvider>
   

)
