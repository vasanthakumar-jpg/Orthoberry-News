// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
// import HomeSearch from "./Components/HomeSearch";
// import LatestBlog from "./Components/LatestBlog";
// import FullContentPage from "./Components/FullContentPage";
// import "./index.css";

// function App() {
//   return (
//     <BrowserRouter basename={import.meta.env.BASE_URL}>
//       <Header />
//       <Routes>
//         <Route
//           path="/Orthoberry-News/"
//           element={
//             <>
//               <HomeSearch />
//               <LatestBlog />
//             </>
//           }
//         />
//         <Route
//           path="/Orthoberry-News/content/:id"
//           element={<FullContentPage />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;



import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomeSearch from "./Components/HomeSearch";
import LatestBlog from "./Components/LatestBlog";
import FullContentPage from "./Components/FullContentPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Header />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HomeSearch />
            <LatestBlog />
          </>
        }
      />
      <Route path="/content/:id" element={<FullContentPage />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
