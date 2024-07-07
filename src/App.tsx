import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';
import Explore from './pages/Explore';
import Report from './pages/Report';
import Create from './pages/Create';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/category/:title" element={<Category />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/report" element={<Report />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;
