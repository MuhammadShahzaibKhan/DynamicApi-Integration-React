import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "../../pages/Projects";
import AddPosts from "../../pages/AddPosts";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="add/" element={<AddPosts />} />
          <Route path="add/:id" element={<AddPosts />} />
        </Routes>
      </Router>
    </>
  );
}
