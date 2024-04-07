import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import QuizReact from './pages/Quizzes/QuizReact';
import QuizPython from './pages/Quizzes/QuizPython';
import QuizTailwind from './pages/Quizzes/QuizTailwind';
import QuizNodeJS from './pages/Quizzes/QuizNodeJS';
import QuizTypescript from './pages/Quizzes/QuizTypescript';
import QuizJavaScript from './pages/Quizzes/QuizJavaScript';
import QuizMySQL from './pages/Quizzes/QuizMySQL';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reactquiz' element={<QuizReact />} />
        <Route path='/typescriptquiz' element={<QuizTypescript />}/>
        <Route path='/tailwindquiz' element={<QuizTailwind />} />
        <Route path='/pythonquiz' element={<QuizPython />}/>
        <Route path='/nodequiz' element={<QuizNodeJS />} />
        <Route path='/javascriptquiz' element={<QuizJavaScript />} />
        <Route path='/mysqlquiz' element={<QuizMySQL />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
