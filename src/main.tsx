import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import "./style/main.scss"
import {Home, Details} from './pages/PageLoader.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/projects" element={<Details/>}></Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
