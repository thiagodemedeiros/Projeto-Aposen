import Layout from "./Layout"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from "./pages/Post";

export default function App() {

  return (
    <>
      <Router basename="/Projeto-Aposen">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}