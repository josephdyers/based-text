import { useState } from 'react';
import { Home } from './pages/Home';
import { Editor } from './pages/Editor';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'editor'>('home');

  return (
    <>
      {currentPage === 'home' ? (
        <Home onStart={() => setCurrentPage('editor')} />
      ) : (
        <Editor onHome={() => setCurrentPage('home')} />
      )}
    </>
  );
}

export default App;
