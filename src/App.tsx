import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Practice from "./pages/Practice";
import Profile from "./pages/Profile";
import ComprehensiveTest from "./pages/ComprehensiveTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="learning/:courseId/:chapterId" element={<Learning />} />
        <Route path="practice/:courseId/:chapterId" element={<Practice />} />
        <Route path="profile" element={<Profile />} />
        <Route path="comprehensive-test" element={<ComprehensiveTest />} />
      </Route>
    </Routes>
  );
}

export default App;
