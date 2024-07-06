import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';
import Explore from './pages/Explore';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/category/:title" element={<Category />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
    </Router>
  )
}

export default App;
