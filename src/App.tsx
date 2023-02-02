import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hobbies from './pages/Hobbies/Hobbies';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Projects />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/hobbies" element={<Hobbies />}></Route>
      </Routes>
      </main>
    </>
  );
}

export default App;
