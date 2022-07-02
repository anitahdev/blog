import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import MainBlogPage from "./pages/MainBlogPage";
import SinglePostPage from "./pages/SinglePostPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<MainBlogPage />} />

          <Route path="post/:postId" element={<SinglePostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
