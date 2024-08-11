import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoContainer from './TodoContainer'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoContainer></TodoContainer>
  </StrictMode>,
)
