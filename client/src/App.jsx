import "./App.css";

import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import CreatePost from "./components/pages/CreatePost";
import PostPage from "./components/pages/PostPage";
import { UserContextProvider } from "./components/userContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
