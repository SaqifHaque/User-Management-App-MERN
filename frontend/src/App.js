import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import InterviewList from "./components/InterviewList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<InterviewList/>}/>
          <Route path="/add-user" element={<AddUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
