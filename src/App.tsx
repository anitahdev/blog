import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import MainBlogPage from "./pages/MainBlogPage";
import SinglePostPage from "./pages/SinglePostPage";
import { ApiContext, context } from "./hooks/useApi";
export default function App() {
  return (
    <ApiContext.Provider value={context}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<MainBlogPage />} />
          <Route path="" element={<MainBlogPage />} />
          <Route path="post/:postId" element={<SinglePostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ApiContext.Provider>
  );
}
