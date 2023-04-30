import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import { lazy,Suspense } from "react";
import "./App.css";
import Navigation from "./Navigation";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
const About = lazy(() => import("./pages/About"))
const Home = lazy(() => import("./pages/Home"))
const Profile = lazy(() => import("./pages/Profile"))
const Contact = lazy(() => import("./pages/Contact"))
const Loading = () => <div>Loading...</div>;
function App() {
  return (
    <div className="Main" >
      <Router >
        <Navigation />
        <Suspense fallback={<Loading />}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile/:name" element={<Profile />} />
        </Routes>
      </Suspense>
      </Router>
    </div>
  );
}
export default App;
