import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reactquiz' element={<Quiz />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
