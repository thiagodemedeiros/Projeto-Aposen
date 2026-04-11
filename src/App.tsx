import Layout from "./Layout"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from "./pages/Post";
import SearchPostByTitle from "./pages/SearchPostByTitle";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {

  return (
    <>
      <Router basename="/Projeto-Aposen">
      <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/search/:title" element={<SearchPostByTitle />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}