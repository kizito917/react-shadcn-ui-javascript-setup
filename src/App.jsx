import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loader from './components/Loader';
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
