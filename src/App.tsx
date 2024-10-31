import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import OrderOfWorkShip from "./pages/orderofService/order";
import Venue from "./pages/venue/venue";
import OurStory from "./pages/story/ourStory";
import EInvite from "./pages/invite/invite";
import Gallery from "./pages/gallery/gallery";
import About from "./pages/about/about";
import Main from "./pages/home/main";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<OrderOfWorkShip />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/invite" element={<EInvite />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
