import Layout from "./Layout"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from "./pages/Post";
import SearchPostByTitle from "./pages/SearchPostByTitle";
import ScrollToTop from "./components/ScrollToTop";
import SearchPostByType from "./pages/SearchPostByType";
import SobreNos from "./pages/SobreNos";
import ParceirosPage from "./pages/ParceirosPage";

export default function App() {

  return (
    <>
      <Router>
      <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/parceiros" element={<ParceirosPage />} />
            {/* <Route path="/contatos" element={<Contatos />} /> */}
            <Route path="/post/:id" element={<Post />} />
            <Route path="/search/:title" element={<SearchPostByTitle />} />
            <Route path="/search/type/:type" element={<SearchPostByType />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}