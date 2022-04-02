import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Error404 from './components/error404';
import GamesHub from './components/Games-Hub';
import Home from './components/Home';
import Lesson from './components/Lesson-view';
import LessonHub from './components/Lessons-Hub';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='*' element={<Error404 />}/>
          <Route path='/' element={<Home />} />
          <Route path='/lessons' element={<LessonHub />} />
          <Route path='/lessons' element={<NewForm />} />
          <Route path='/games' element={<GamesHub />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;