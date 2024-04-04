import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import QuizReact from './pages/Quizzes/QuizReact';
import QuizTypescript from './pages/Quizzes/QuizTypescript';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reactquiz' element={<QuizReact />} />
        <Route path='/typescriptquiz' element={<QuizTypescript />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
