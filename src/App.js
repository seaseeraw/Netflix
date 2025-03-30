// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import MovieDetails from "./pages/MovieDetails";
// import Login from "./pages/Login";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/movie/:id", element: <MovieDetails /> },
//   { path: "/login", element: <Login /> },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
