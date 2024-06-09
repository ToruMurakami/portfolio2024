import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


// if (document.getElementById('root')) {
//     ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
// }

// // Preamble
// if (import.meta.hot) {
//     import.meta.hot.accept();
// }


const App = () => {
    return (
        <Router>
            <div class="container">
                <header>
                    <h1>MyPortfolio</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/work">Work</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </header>
                <div className="contents">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <footer>
                        <p>&copy; 2024 ToruMurakami</p>
                    </footer>
                </div>
            </div>
        </Router>
    );
}

if (document.getElementById('root')) {
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}