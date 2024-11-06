import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SearchMovie } from './SearchMovie'
import './styles/search.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchMovie />
  </StrictMode>,
)
