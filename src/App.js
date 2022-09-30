import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import PostsPage from './pages/PostsPage.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Post" element={<PostsPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
