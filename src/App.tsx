import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
