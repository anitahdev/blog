import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBlogPage from "./pages/MainBlogPage";
import SinglePostPage from "./pages/SinglePostPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainBlogPage />}></Route>
        <Route path="post/:postId" element={<SinglePostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
