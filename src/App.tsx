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
import QuizCsharp from './pages/Quizzes/QuizCsharp';
import QuizGit from './pages/Quizzes/QuizGit';
import QuizHTMLCSS from './pages/Quizzes/QuizHTMLCSS';
import QuizJava from './pages/Quizzes/QuizJava';
import QuizNextJS from './pages/Quizzes/QuizNextJS';

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
        <Route path='/mysqlquiz' element={<QuizMySQL />} />
        
        <Route path='/csharpquiz' element={<QuizCsharp />} />
        <Route path='/gitquiz' element={<QuizGit />}/>
        <Route path='/htmlcssquiz' element={<QuizHTMLCSS />} />
        <Route path='/javaquiz' element={<QuizJava />} />
        <Route path='/nextjsquiz' element={<QuizNextJS />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
